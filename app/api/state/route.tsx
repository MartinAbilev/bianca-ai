import { revalidatePath } from "next/cache";
import API_URL from "../api_url";

export const fetchCache = 'force-no-store';

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
//   :
//   {
//     cache: 'no-cache',
//     method: 'POST',
//     body: '{"req":"false"}'
//   }

  const res = await fetch(API_URL[environment], options)
  const bug =await res.json()
  return Response.json( bug )
}
