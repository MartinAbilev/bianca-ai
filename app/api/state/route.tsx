import { revalidatePath } from "next/cache";
export const fetchCache = 'force-no-store';

import API_URL from "../api_url";

// check environment mode
var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development'

export async function GET(request: Request)
{
  revalidatePath('/api/state')

  const options : RequestInit= environment === 'production' ?
  {
    cache: 'no-cache',
    method: 'GET'
  }
  :
  {
    cache: 'no-cache',
    method: 'GET'
  }

  const res = await fetch(API_URL[environment], options)

    if (res.ok)
    {
      const bug =await res.json()
      return Response.json( bug )
    }
    else
    {
      console.log('Failed to fetch data: get state')
      return Response.json( {state: "no state server down"} )
    }
}

