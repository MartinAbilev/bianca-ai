import NextAuth from 'next-auth'

import type { User } from '@/lib/definitions'
import Credentials from 'next-auth/providers/credentials'
import { compare } from 'bcrypt-ts'
import { sql } from '@vercel/postgres'

import { authConfig } from './auth.config'

export const
{
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
}
= NextAuth({
  ...authConfig,
  providers:
  [
    Credentials({
      async authorize({ email, password }: any)
      {
        try
        {
          const user = await sql`SELECT * FROM users WHERE email=${email}`

          let passwordsMatch = await compare(password, user.rows[0].password!)

          if (passwordsMatch) return user.rows[0] as any
          else
          throw new Error("Oops, something went wrong with password!")
        }
        catch (error)
        {
          throw new Error("Oops, something went wrong!")
        }
      },
    }),
  ],
})
