import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"

export async function POST(request: Request)
{
  try
  {
    // Parse the request body as JSON
    const brainObject = await request.json()

    // Revalidate the path to ensure the cache is updated
    revalidatePath('/api/db/brainz/insert')

    // Stringify the JSON object
    const brainJson = JSON.stringify(brainObject)

    // Insert the stringified JSON into the BRAINZ table
    await sql`INSERT INTO BRAINZ (brain) VALUES (${brainJson})`

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
