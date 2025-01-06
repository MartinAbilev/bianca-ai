import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"

export async function GET(request: Request)
{
  revalidatePath('/api/db/getAll')

  const comments = await sql`SELECT * from COMMENTS`

  return Response.json( comments ? comments : "no comments" )
}
