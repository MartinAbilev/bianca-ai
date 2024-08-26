import { revalidatePath } from "next/cache";

export const fetchCache = 'force-no-store';
var API_URL:any =
{
  production: 'http://77.38.218.82:3000/api/state/upload', // uncoment this for prod
//   production: 'http://localhost:3001/api', // uncoment this for local build
//   development:'http://localhost:3001/api'// uncoment this for local
  development: 'http://77.38.218.82:3000/api/state', // uncoment this for prod
}
// check environment mode
var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development'

export async function GET(request: Request)
{
  revalidatePath('/api/state')

  const options : RequestInit= environment === 'production' ?
  {
    cache: 'no-cache',
    method: 'POST'
  }
  :
  {
    cache: 'no-cache',
    method: 'POST'
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

