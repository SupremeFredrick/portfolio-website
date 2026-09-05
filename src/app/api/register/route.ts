import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return NextResponse.json({
    id: "demo-user",
    name,
    email,
    password: hashedPassword,
    message: "Demo registration successful. Connect a real auth backend to persist users.",
  });
}
