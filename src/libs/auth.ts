import bcrypt from "bcrypt";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jhondoe@example.com" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text", placeholder: "Jhon Doe" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter an email or password");
        }

        const passwordHash = await bcrypt.hash(credentials.password, 10);
        const normalizedEmail = String(credentials.email).trim().toLowerCase();

        return {
          id: "demo-user",
          name: credentials.username || "Demo User",
          email: normalizedEmail,
          password: passwordHash,
        };
      },
    }),
  ],
};
