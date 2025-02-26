import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const users = await prisma.users.findMany();
    return new NextResponse(JSON.stringify({ message: users, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "get user failed", status: 500 })
    );
  }
};
