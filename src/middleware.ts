import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { verifyPrivyUser } from "./util/privy";

// Limit the middleware to paths starting with `/api`
export const config = {
  matcher: "/api/:function*",
};

export async function middleware() {
  try {
    const authorization = headers().get("authorization");
    if (!authorization) {
      return NextResponse.json(
        { success: false, message: "missing authorization header" },
        { status: 401 }
      );
    }

    // Call our authentication function to check the request
    const authToken = authorization.split("Bearer ").at(1);

    if (!authToken) {
      return NextResponse.json(
        { success: false, message: "missing auth token" },
        { status: 401 }
      );
    }

    const verifiedUser = await verifyPrivyUser(authToken);

    if (!verifiedUser) {
      return NextResponse.json(
        { success: false, message: "authentication failed" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "bad request" },
      { status: 400 }
    );
  }
}
