import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"

export async function POST(request: Request)
{
  try
  {
    // Parse the request body as JSON
    const bugObject = await request.json()

    // Revalidate the path to ensure the cache is updated
    revalidatePath('/api/db/brainz/insert')

    // Stringify the JSON object
    const brainJsonStr = JSON.stringify(bugObject.brain)

    let {brain: _, ...rest} = bugObject

    const statsJson = {...rest}
    const statsJsonStr = JSON.stringify(statsJson)

    // Insert the stringified JSON into the BRAINZ table
    await sql`INSERT INTO BRAINZ (brain, stats) VALUES (${brainJsonStr}, ${statsJsonStr})`

    // Return a successful response
    return new Response('Inserted successfully', { status: 200 })
  }
  catch (error)
  {
    // Handle any errors that occur during the request
    console.error('Error inserting data:', error)
    return new Response('Failed to insert data', { status: 500 })
  }
}
