"use client"
import { useRouter } from "next/navigation"
import Back from "../buttons/back"
import Comments from "../components/comments"


export default function Page()
{
    // Use router
    const router = useRouter()
    return(
        <div className="font-mono
                        flex min-h-screen
                        flex-col
                        items-center
                        justify-between
                        p-8
                        overflow-auto"
        >

        </div>
    )
}
