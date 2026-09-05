import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const resetToken = crypto.randomBytes(20).toString("hex");
  const resetURL = `${process.env.SITE_URL || "http://localhost:3000"}/auth/reset-password/${resetToken}`;

  return NextResponse.json(
    {
      message: "Demo password reset requested.",
      resetToken,
      resetURL,
    },
    { status: 200 },
  );
}
