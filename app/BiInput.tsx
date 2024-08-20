'use client'
import { useState } from 'react'

export default function BiInput(props: { action: Function, className?: string })
{
    const { action, className } = props
    const [value, setValue] = useState('')

    return (
        <div className="bottom-10 flex h-16 w-full">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}  // Update state on input change
                onKeyUp={(e) =>
                {
                    e.preventDefault();
                    const v = (e.target as HTMLInputElement).value;
                    const k = e.key;
                    if (k === 'Enter')
                    {
                        action(v);  // Call the action with the input value
                        setValue('');  // Clear the input field after Enter
                    }
                }}
                className={`bottom-10 flex h-16 w-full
                            border-b
                            border-gray-300
                            bg-gradient-to-b from-zinc-200
                            pb-6 pt-8
                            backdrop-blur-2xl
                            dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit
                            lg:static lg:w-full lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 ${className}`}
            />
        </div>
    )
}
