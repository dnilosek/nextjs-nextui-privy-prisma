"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Button } from "@nextui-org/button";

import { usePrivy } from "@privy-io/react-auth";

import NextLink from "next/link";

import { UserDropdown } from "@/components/ui/user-dropdown";

export const Navbar = () => {
  const { login, ready, authenticated } = usePrivy();

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
