import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"

export async function GET(request: Request) {
  revalidatePath('/api/db/getAll')

  let comments;

  try {
    // Get comments from the database
    comments = await sql`
      SELECT c.uid, c.message, c.created_at, c.userid, u.username
      FROM COMMENTS c
      LEFT JOIN users u ON c.userid = u.id
    `;

    // Format the comments array
    comments = comments.rows.map((comment) => {
      const createdAt = new Date(comment.created_at);
      const formattedTime = createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      return {
        uid: comment.uid,
        message: comment.message,
        time: formattedTime, // formatted as hh:mm
        username: comment.username, // associated username
      };
    });
  } catch (error) {
    comments = { status: "no comments" };
  }

  return Response.json(comments);
}
