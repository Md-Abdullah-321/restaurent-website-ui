// next-auth.d.ts
import "next-auth";

/**
 * Extend NextAuth types to include custom user properties
 */
declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id?: string;
    email: string;
    password?: string;
  }
}
