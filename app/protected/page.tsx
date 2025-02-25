
import { auth, signOut } from '@/auth';
import { headers } from 'next/headers';

export default async function ProtectedPage()
{
  const headersData = await headers();

  // const session = await auth();

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        You are logged in as
        {/* {session?.user?.email} */}
        <SignOut />
      </div>
    </div>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}
