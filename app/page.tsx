"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Bug from "./Bugz/Bug"
import Image from "next/image"

export default  function Page()
{
  const d: any =undefined
  const [data, setData] = useState(d)
  const [activeBug, setActiveBug] = useState(-1)
  const [isThereActiveBug, setIsThereActiveBug] = useState(false)

  // Use router
  const router = useRouter()

  function activateBug(i: number)
  {
    console.log('activate bug:', i)
    setActiveBug(i)
    setIsThereActiveBug(true)
  }
  function deActivateBug(i: number)
  {
    console.log('deactivate bug:', i)
    setActiveBug(i)
    setIsThereActiveBug(false)
  }

  // on load get state every 1s or use fake data
  useEffect( () =>
  {
    setInterval(()=>
    {

      fetch('/api/state',
      {
        cache: 'no-store',

      })
      .then((res) => res.json())
      .then((data) =>
      {
        setData(data)
      })
      .catch(err=>
      {
        fetch('/api/fakestate')
        .then((res) => res.json())
        .then((data) =>
        {
          setData(data)
        })
      })
    }, 500)
  },[])

  return(
    <div id="app">

      {/* ***FOREGROUND*** */}
      <main className="flex min-h-screen flex-col items-center justify-between p-8">

        <div className="flex flex-col items-center">
          {/* Bugz Powered and about us */}
          <div className="font-mono font-bold flex items-center p-4">
            <a className="p-4">
              BUGZ:
            </a>
            <a
              className="font-normal flex place-items-center gap-2 lg:p-0"
              href="#"
              onClick={()=>router.push('/aboutus')}
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <Image
                src="/bugzinside.svg"
                alt="Bugz Inside Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
            <a href="#">
                <div onClick={()=>router.push('/aboutus')} className="p-4">
                About us.
              </div>
            </a>
        </div>

          {/* BiAI logo */}
          <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert opacity-10 z-10"
              src="/biai.svg"
              alt="Bi.AI Logo"
              width={280*2}
              height={137*2}
              priority
          />
        </div>

        {/* list of bug component */}
        <div className="font-mono text-center p-8">
        {
          data && data.bugz.map(((a:any, i: number)=>
            {
              return data
              &&
              isThereActiveBug
                            &&
                            <div className="" key={i}>
                            {
                              activeBug === i && (
                                <div>
                                  The active bug!
                                  <Bug   state={data.bugz} i={i} activate={deActivateBug} isActive={true}/>
                                </div>
                              )
                            }
                            </div>
                            ||
                            <div className="p-8" key={i}>
                              There no active bug click one to activate.
                              <Bug   state={data.bugz} i={i} activate={activateBug} isActive={false}/>
                            </div>
            }))

        }
        </div>

        {/* usseles button */}
        <div className="font-mono p-4">
          {/* <button className="button bc-5 br-4 font-mono" onClick={()=>setValue(value + 1)}> update </button> */}
        </div>
      </main>

      {/* ***BACKGROUND*** */}
      <main className="before flex min-h-screen flex-col items-center justify-between p-24">
        {/* cool background fx */}
        <div className="font-mono p-6">
          <div className="relative flex place-items-center
          before:absolute
          before:h-[1250px]
          before:w-[1080px]
          after:h-[580px]
          after:w-[540px]
          before:lg:h-[660px]
          before:-translate-x-1/2
          before:rounded-full
          before:bg-gradient-radial
          before:from-white
          before:to-transparent
          before:blur-2xl
          before:content-['']
          after:absolute
          after:-z-20
          after:translate-x-1/3
          after:bg-gradient-conic
          after:from-sky-200
          after:via-blue-200
          after:blur-2xl
          after:content-['']
          before:dark:bg-gradient-to-br
          before:dark:from-transparent
          before:dark:to-blue-700
          before:dark:opacity-10
          after:dark:from-sky-900
          after:dark:via-[#0141ff]
          after:dark:opacity-40
          z-[-1]">
          </div>
        </div>

        {/* just divider */}
        <div className="font-mono p-4"></div>

        {/* cool matrix fx in background */}
        <div className="font-mono p-4 before opacity-10">
          state: {JSON.stringify(data)}
        </div>
      </main>

      {/* cool bug fx */}
      {
        data && data.bugz.map(((a:any, i: number)=>
        {
          return <div className="p-8" key={i}>
            <div
            className="before"
            style={{
            color: "white",
            position: 'absolute',
            top: `${data.bugz[i].y}px`,
            left: `${data.bugz[i].x}px`,
            height: '24px',
            zIndex: -10,
            padding: 0,
            backgroundBlendMode: 'owerlay',
            backgroundColor: 'lightblue',
            transition:'left 1s linear',
            opacity: '30%'
            }}
            >|O|</div>
          </div>
        }))
      }

    </div>
  )
}
