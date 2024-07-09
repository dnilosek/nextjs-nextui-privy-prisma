"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { usePrivy } from "@privy-io/react-auth";

import { getPrivyUsername } from "@/util/privy";

export const UserDropdown = () => {
  const { user, ready, authenticated, logout } = usePrivy();

  if (!(ready && authenticated) || !user) {
    return null;
  }

  const userName = getPrivyUsername(user);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Profile</Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu">
        <DropdownItem className="text-center" onPress={logout}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
