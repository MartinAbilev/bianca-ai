import NextAuth from 'next-auth';

import type { User } from '@/lib/definitions';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt-ts';
// import { getUser } from 'app/db';
import { sql } from '@vercel/postgres';

import { authConfig } from './auth.config';

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize({ email, password }: any) {
        let user = await getUser(email) as User;
        if (!user) return null;
        let passwordsMatch = await compare(password, user.password!);
        if (passwordsMatch) return user as any;
      },
    }),
  ],
});
