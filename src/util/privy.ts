"use server";

import type { AuthTokenClaims } from "@privy-io/server-auth";
import { PrivyClient } from "@privy-io/server-auth";

export async function verifyPrivyUser(
  accessToken: string
): Promise<AuthTokenClaims | null> {
  const privy = new PrivyClient(
    process.env.PRIVY_CLIENT_ID || "",
    process.env.PRIVY_CLIENT_SECRET || ""
  );

  try {
    const verifiedClaims = await privy.verifyAuthToken(accessToken);
    return verifiedClaims;
  } catch (error) {
    return null;
  }
}
