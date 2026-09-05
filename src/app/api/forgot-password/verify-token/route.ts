import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { token } = body;

  if (!token) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  return NextResponse.json({
    valid: true,
    message: "Demo reset token is valid.",
    token,
  });
};
