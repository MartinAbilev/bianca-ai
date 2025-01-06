import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"

export async function GET(request: Request)
{
  revalidatePath('/api/db/getAll')

  let comments;

  try
  {
    comments = await sql`SELECT * from COMMENTS`
  }
  catch (error)
  {
    comments = { status: "no comments" }
  }

  return Response.json(comments)
}
