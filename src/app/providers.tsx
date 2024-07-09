"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { PrivyProvider } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: "dark",
          accentColor: "#676FFF",
          logo: "https://1000logos.net/wp-content/uploads/2021/04/ACME-logo.png",
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>{" "}
    </PrivyProvider>
  );
}
