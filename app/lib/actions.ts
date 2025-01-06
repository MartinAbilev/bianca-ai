'use server';

import bcrypt from 'bcrypt';
import { sql } from '@vercel/postgres';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { v4 as uuidv4 } from 'uuid';

export async function signup(
  prevState: string | undefined,
  formData: FormData,
)
{
  try
  {
    const user =
    {
      id: uuidv4(),
      name: '' + formData.get('username'),
      email: '' + formData.get('email'),
      password: '' + formData.get('password')
    };

    console.log('SIGNIN IN', user)
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await sql`
      INSERT INTO users (id, name, email, password)
      VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
      ON CONFLICT (id) DO NOTHING;
    `;
    await signIn('credentials', formData)
  }
  catch (error)
  {
    if (error instanceof AuthError)
    {
      switch (error.type)
      {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}
