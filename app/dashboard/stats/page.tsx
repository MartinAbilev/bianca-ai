'use client'

import { useEffect, useState } from "react"

export default function StatsPage()
{
    const [stats, setStats] = useState([{id: 0, created_at: 0, stats: {ct: 0}}])

    useEffect(()=>
        {
            fetch('/dashboard/api/db/stats').then(res => res.json())
            .then(statsJson =>
                {
                    setStats(statsJson)
                    console.log('STATS:', statsJson)
                })
        },[])
    return (
        <div className="container min-h-screen">
                Statistics
                {stats.map((stat, key)=>
                    {
                        const {id, stats} = stat
                        return <div key={key}>id={id} ct={stats.ct}</div>
                    })}
        </div>
    )

}
