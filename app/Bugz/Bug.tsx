'use client'
import { useState } from "react"
import Save from "../buttons/Save"
import Load from "../buttons/Load"

function handleHidClick(e:React.MouseEvent, hid: Object)
{
    e.stopPropagation()
}

export default function Bug(props: {state: any, i: number, activate: Function, isActive: any})
{
    const {state, i, activate, isActive} = props
    const [isVisible, setIsVisible] = useState(true)

    const bug: any = state[i]
    const {inputs, hidden, outputs} = bug.brain

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
                            return <div className="button button-small bc-2" key={i} style={{opacity: a.neuronvalue + 0.1}} onClick={(e)=>{handleHidClick(e, a)}}>
                            :O:
                        </div>
                        })
                }
                </div>

                HIDDEN LAYER:
                <div className="justify-center place-items-center">
                {
                    hidden.nurons.map((a: any, i: number)=>
                        {
                            return <div className="button button-small" key={i} style={{opacity: a.neuronvalue + 0.1}} onClick={(e)=>{handleHidClick(e, a)}}>
                                :O:
                            </div>
                        })
                }
                </div>

                OUTPUTS LAYER:
                <div className="justify-center place-items-center">
                {
                    outputs.nurons.map((a: any, i: number)=>
                        {
                            return <div className="button button-small bc-3" key={i} style={{opacity: a.neuronvalue + 0.1}} onClick={(e)=>{handleHidClick(e, a)}}>
                                :O:
                            </div>
                        })
                }
                </div>

                <div className="p-4 flex" style={{width: '100%'}}>
                    <div className="" style={{marginRight: 'auto'}}>
                        <Load brain={bug.brain}/>
                    </div>
                    <div className="" style={{marginLeft: 'auto'}}>
                        <Save brain={bug.brain}/>
                    </div>
                </div>
            </div>

        }


    </div>)
}
