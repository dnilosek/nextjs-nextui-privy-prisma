"use client";

import { Navbar as NextUINavbar, NavbarContent } from "@nextui-org/navbar";

import { Button } from "@nextui-org/button";

import { usePrivy, useLogin } from "@privy-io/react-auth";

import NextLink from "next/link";

import { UserDropdown } from "@/components/ui/user-dropdown";

export const Navbar = () => {
  const { ready, authenticated, logout, getAccessToken } = usePrivy();
  const { login } = useLogin({
    onComplete: async (user) => {
      // post user id to auth api
      const token = await getAccessToken();
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: user.id,
          wallet: user.wallet ? user.wallet.address : "",
        }),
      });

      // Logout if the request fails
      if (!response.ok) {
        logout();
      }
    },
  });

  return (
    <NextUINavbar maxWidth="xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <p className="font-bold text-inherit">ACME</p>
        </NextLink>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
        {!(ready && authenticated) ? (
          <Button onPress={login}>Log in</Button>
        ) : (
          <UserDropdown />
        )}
      </NavbarContent>
    </NextUINavbar>
  );
};
