import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"

export async function GET(request: Request)
{
  revalidatePath('/api/db')

  return Response.json( await sql`SELECT * from COMMENTS` )
}