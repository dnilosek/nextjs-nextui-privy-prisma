import { NextResponse } from "next/server";

import prisma from "@/util/prisma";
import { AuthedUserPostSchema } from "@/util/types";

export async function POST(request: Request) {
  const req = await request.json();

  // Get userid
  const user = AuthedUserPostSchema.parse(req);

  // Check if user exists
  const userExists = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  // If user does not exist, create user with this id
  if (!userExists) {
    await prisma.user.create({
      data: {
        id: user.id,
        wallet: user.wallet,
      },
    });
  }

  return NextResponse.json({ success: true });
}
