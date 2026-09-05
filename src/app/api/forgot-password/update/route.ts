import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return NextResponse.json(
    {
      message: "Demo password updated.",
      email,
      password: hashedPassword,
    },
    { status: 200 },
  );
}
