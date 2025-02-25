import { NextAuthConfig } from 'next-auth'

export const authConfig =
{
  pages:
  {
    signIn: '/login',
  },
  providers:
  [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks:
  {
    authorized({ auth, request: { nextUrl } })
    {
      let isLoggedIn = !!auth?.user
      let isOnDashboard = nextUrl.pathname.startsWith('/dashboard')

      if (isOnDashboard)
      {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      }
      else if (isLoggedIn)
      {
        return Response.redirect(new URL('/dashboard', nextUrl))
      }
      return true
    },

    async jwt({ token, user })
    {
      // Add user ID to the token during login
      if (user)
      {
        token.id = user.id // Assuming your user object has an `id` field
      }
      return token
    },
    async session({ session, token })
    {
      // Add the user ID from the token to the session object
      if (token.id)
      {
        session.user.id = '' + token.id
      }
      return session
    },
  },
} satisfies NextAuthConfig
