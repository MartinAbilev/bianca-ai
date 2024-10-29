import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard)
      {
        if (isLoggedIn)
          {
            console.log('IS LOGED IN AND ON DASHBOARD', nextUrl)

            return true;
          }
        return false; // Redirect unauthenticated users to login page
      }
      else if (isLoggedIn)
      {
        console.log('IS LOGED IN AND NOT DASHBOARD', nextUrl)
        return Response.redirect(new URL('/dashboard' + '/xxx', nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
