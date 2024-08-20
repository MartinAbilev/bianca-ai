'use client'
import { useState } from "react"


export default function Bug(props: {state: any, i: number, activate: Function, isActive: any})
{
    const {state, i, activate, isActive} = props
    const [isVisible, setIsVisible] = useState(true)

    const bug: any = state[i]
    const {inputs, hidden} = bug.brain

    // toggle isActive
    function activete()
    {
        console.log(isActive)

        activate(i)
    }

    return(
        bug
        &&
        isVisible
        &&
        <div className="border-b
                        br-8
                        pointer-
                        border-gray-300
                        bg-gradient-to-b
                        from-zinc-200
                        pb-6
                        pt-8
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
                        lg:dark:bg-zinc-800/
                        30 p-8"
                        style={{zIndex:1, cursor: "pointer" }}

            onClick={()=>
            {
                activete()
            }}
        >

        BUG: id {bug.id} is active: {JSON.stringify(isActive)}
        <br />
        {
            isActive
            &&
            <div>
                INPUTS LAYER:
                <div className="flex justify-center place-items-center">
                {
                inputs.nurons.map((a: any, i: number)=>
                    {
                        return <div className="" key={i}>
                            :{a.neuronvalue.toFixed(2)}:
                        </div>
                    })
                }
                </div>

                HIDDEN LAYER:
                <div className="flex justify-center place-items-center">
                {
                    hidden.nurons.map((a: any, i: number)=>
                        {
                            return <div className="button button-small" key={i}>
                                :{a.neuronvalue}:
                            </div>
                        })
                }
                </div>
            </div>
        }


    </div>)
}
