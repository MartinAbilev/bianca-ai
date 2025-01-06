"use client"
import { useRouter } from "next/navigation"
import Back from "./back"
import Comments from "./comments"

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
            {/* back button top */}
             <div className="p-4">
               <Back/>
            </div>

            {/* about item */}
            <div className="flex items-center">
                <div><Back/></div>
                <div className="border-b
                                br-8
                                border-gray-300
                                bg-gradient-to-b
                                from-zinc-200
                                pb-6 pt-8
                                backdrop-blur-2xl
                                dark:border-neutral-800
                                dark:bg-zinc-800/30
                                dark:from-inherit
                                lg:static
                                lg:w-auto
                                lg:rounded-xl
                                lg:border
                                lg:bg-gray-200
                                lg:p-4
                                lg:dark:bg-zinc-800/30
                                p-8"
                    >
                    <li>ME = Martin A.  <a className="font-bold br-8 bc-6 ph-1" href="mailto:martin.abilev@gmail.com">MAIL ME</a>
                    </li>
                    <li>BI = Bianka Donnie Hamond the AI</li>
                    <br />
                    <a
                        className="pointer-events-none font-normal flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://github.com/MartinAbilev/bugs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        git for BUGZ: https://github.com/MartinAbilev/bugs
                    </a>
                    <br />
                    <a
                        className="pointer-events-none font-normal flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://github.com/MartinAbilev/bianca-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        git for THIS: https://github.com/MartinAbilev/bianca-ai
                    </a>
                    <br />
                    <a
                        className="pointer-events-none font-normal flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://gdshop.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GD SHOP: https://gdshop.vercel.app
                    </a>
                </div>
                <div><Back/></div>
            </div>
            <div className="flex flex-col items-cemter">
                {/* comments from db nd back button*/}
                <div className="flex flex-col items-center p-4">
                    <Comments/>
                    <Back/>
                </div>
            </div>
            <div></div>
        </div>
    )
}
