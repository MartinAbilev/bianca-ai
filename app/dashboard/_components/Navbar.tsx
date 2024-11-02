import BiancaLogo from "@/app/ui/bianca-logo";
import { signOut } from "@/app/auth";
import Link from "next/link";


export default function Navbar()
{
    return <>
        <header className="flex justify-center  p-6 shadow-xl top-0 w-full z-10 bg-background/95">
            <nav className="flex items-center gap-10 container font-semibold text-gray-700">
                <Link href="#" className="mr-auto w-32">
                    <BiancaLogo />
                </Link>
                <Link href="#">Edit</Link>
                <Link href="/dashboard/stats">Stats</Link>
                <form
                action={async () => {
                    'use server';
                    await signOut();
                }}
                >
                <button>
                    <div className="hidden md:block">Sign Out</div>
                </button>
                </form>
            </nav>
         </header>
    </>
}
