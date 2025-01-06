import bcrypt from 'bcrypt'
import { db } from '@vercel/postgres'
import { users, comments } from '@/lib/placeholder-data'

console.log('CONECTING TO DB')
const client = await db.connect()

async function seedUsers()
{
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )
  `

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10)
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING
      `
    }),
  )

  return insertedUsers
}

async function seedBugz()
{
  await client.sql`
    CREATE TABLE IF NOT EXISTS brainz (
      id SERIAL PRIMARY KEY,
      brain JSON NOT NULL,
      stats JSON NOT NULL,
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
    )
  `;
}

async function seedComments() {
  // Create the comments table if it doesn't exist
  await client.sql`
    CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      uid UUID NOT NULL UNIQUE,
      message TEXT NOT NULL,
      userid UUID NOT NULL,
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
    )
  `;

  // Insert comments, ensuring each comment is inserted only once based on the unique 'uid'
  const insertedComments = await Promise.all(
    comments.map(async (comment) => {
      return client.sql`
        INSERT INTO comments (uid, message, userid)
        VALUES (${comment.uid}, ${comment.message}, ${comment.userid})
        ON CONFLICT (uid) DO NOTHING
      `;
    }),
  );

  return insertedComments;
}

export async function GET()
{

  try
  {
    await client.sql`BEGIN`

    await seedUsers()
    await seedBugz()
    await seedComments()

    await client.sql`COMMIT`

    return Response.json({ message: 'Database seeded successfully' })
  }
  catch (error)
  {
    await client.sql`ROLLBACK`
    return Response.json({ error }, { status: 500 })
  }



  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  })

}
