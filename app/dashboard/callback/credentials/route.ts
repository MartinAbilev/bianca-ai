import { NextResponse } from "next/server";

export async function POST(req: Request)
{
    console.log('callback request', req)
    return NextResponse.json({ authenticated: true })
}
