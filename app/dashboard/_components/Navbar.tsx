// "use client"

import { signOut } from "@/auth";
import Link from "next/link";


export default function Navbar()
{

    return <>
        <nav className="flex items-center gap-10 container font-semibold text-gray-700">
            <Link href="#" className="mr-auto">LOGO</Link>
            <Link href="#">Edit</Link>
            <Link href="#">Stats</Link>
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
    </>
}
