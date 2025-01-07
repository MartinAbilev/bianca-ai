"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Bug from "./Bugz/Bug"
import Image from "next/image"
import BiDashButt from "./ui/dashbutton"

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
    var interval = setInterval(()=>
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
        // fetch('/api/fakestate')
        // .then((res) => res.json())
        // .then((data) =>
        // {
        //   clearInterval(interval)
        //   setData(data)
        // })
      })
      // setData();
    }, 5000)
  },[])

  return(
    <div id="app">

      {/* ***FOREGROUND*** */}
      <div className="flex h-screen flex-col items-center p-8 overflow-auto">
        <>
          <BiDashButt />
        </>
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
          data ? data.bugz.map(((a:any, i: number)=>
            {
              return data
              &&
              isThereActiveBug
                            &&
                            <div className="" key={i}>
                            {
                              activeBug === i && (
                                <div className="py-0 bg-slate-300 rounded-xl key={i}">
                                  The current bug!
                                  <Bug   state={data.bugz} i={i} activate={deActivateBug} isActive={true}/>
                                </div>
                              )
                            }
                            </div>
                            ||
                            <div className="py-0 bg-slate-300 rounded-xl" key={i}>
                              Click to expand.
                              <Bug   state={data.bugz} i={i} activate={activateBug} isActive={false}/>
                            </div>
            }))
          :
          <div className="center-container">
            <div className="block">
              <span className="loader block"></span>
            </div>
            <div className="py-4">
              ...Loading...
            </div>
          </div>

        }
        </div>

      </div>

      {/* ***BACKGROUND*** */}
      <div className="before"  style={{width: "100%", bottom: "0px", overflow: "hidden"}}>

        {/* just divider */}
        <div className="font-mono p-4"></div>

        {/* cool matrix fx in background */}
        <div className="font-mono p-4 before opacity-10"  style={{width: "100%", wordBreak: "break-all", overflow: "hidden"}}>
          state: {JSON.stringify(data)}
        </div>

        {/* cool bug fx */}
        {
          <div style={{display: "block", position: "absolute", width: "100%", wordBreak: "break-all", overflow: "hidden"}}>

            {data && data.bugz.map(((a:any, i: number)=>
            {
              return <div className="p-8" key={i}>
                <div
                className="before"
                style={{
                display: "block",
                color: "white",
                position: 'absolute',
                top: `${data.bugz[i].y/6}%`,
                left: `${data.bugz[i].x/8}%`,
                right: '10px',
                height: '24px',
                width: "100%",
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
          </div>}
        </div>
    </div>
  )
}
