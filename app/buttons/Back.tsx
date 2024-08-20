"use client"
import { useRouter } from "next/navigation"

export default function Back()
{
        // Use router
     const router = useRouter()
    return (
    <div className="p-10">
        <button className="br-12 bc-6 p-1" onClick={()=>router.push('/')}>
            {'<-'}
        </button>
    </div>)
}
