import { revalidatePath } from 'next/cache'
export const fetchCache = 'force-no-store'
import API_URL from '../../api_url'

// check environment mode
var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development'

export async function PUT(request: Request)
{
  revalidatePath('/api/state/upload')


  const brain  =  await request.json()
  console.log('Uploading Start')
  const res = await fetch(API_URL[environment] + '/upload',
    {
      cache: 'no-cache',
      method: 'PUT',
      body: brain,
      headers:
      {
        'Content-Type': 'application/json',  // Add this line
      },
    })
  const e =await res.json()
  console.log('Uploading Done', e)

  return Response.json( {res: e} )
}

