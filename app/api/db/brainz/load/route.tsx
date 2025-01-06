import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"

export async function POST(request: Request)
{
  revalidatePath('/api/db/brainz/load')

  const res = await sql`SELECT * FROM BRAINZ ORDER BY id DESC LIMIT 1`
  return Response.json( res.rows[0] )
}
