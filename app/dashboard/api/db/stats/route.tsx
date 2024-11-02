import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"

export async function GET(request: Request)
{
//   revalidatePath('/api/db/brainz/load')

  const res = await sql`SELECT id, created_at, stats FROM BRAINZ ORDER BY id DESC LIMIT 100`
  return Response.json( res.rows )
}
