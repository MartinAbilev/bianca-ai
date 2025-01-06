"use client"
import { useEffect, useState } from 'react'
import { getSession } from 'next-auth/react'
import { Session } from 'next-auth'

export default function BiDashPage()
{
    const [session, setSession] =  useState<Session | null>(null)

    useEffect(() =>
    {
        const storeUserId = async () =>
        {
            console.log('Get Session..')
            const session = await getSession()
            console.log('sesion:', session)
            if (session)
            {
                localStorage.setItem('session', JSON.stringify(session))
                setSession(session)
            }
        }
        storeUserId()
     }, [])

    return (
    <div className="flex min-h-screen items-center justify-center font-extrabold text-xl text-gray-500">
        {session && session.user && session.user.name} BI DASHBOARD PAGE.
    </div>)
}
