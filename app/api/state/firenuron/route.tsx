import { revalidatePath } from 'next/cache'
export const fetchCache = 'force-no-store'
import API_URL from '../../api_url'

// check environment mode
var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development'

export async function POST(request: Request)
{
  revalidatePath('/api/state/firenuron')

  console.log('FIRE NURON', request)

  const nuron  =  request.text()

  const res = await fetch(API_URL[environment] + '/firenuron',
    {
      cache: 'no-cache',
      method: 'POST',
      body: await nuron,
      headers: {
        'Content-Type': 'application/json',  // Add this line
      },
    })
  const e =await res.json()
  return Response.json( {res: e} )
}

