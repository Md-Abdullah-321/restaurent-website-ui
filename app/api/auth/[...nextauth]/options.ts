import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Credentials:", credentials);
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Fetch user from database (e.g., PostgreSQL)
        // const user = getUserByEmail(credentials.email);

        // if (user && verifyPassword(credentials.password, user.password)) {
        return { id: credentials.email, email: credentials.email };
        // } else {
        // return null;
        // }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
};
