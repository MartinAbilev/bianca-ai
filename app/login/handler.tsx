"use server"
import { signIn } from '@/auth';
import { compare } from 'bcrypt-ts';
import { sql } from '@vercel/postgres';

export async function formHandler(formData: FormData)
{
    const email =  formData.get('email') as string
    const password =  formData.get('password') as string

    const user = await sql`SELECT * FROM users WHERE email=${email}` || null

    console.log(' USER FOR LOGIN IS:', user)

    const passwordsMatch = user.rowCount ?  await compare(password, user.rows[0].password!) : null

    if(user.rowCount && passwordsMatch)
    await signIn('credentials',
        {
            redirectTo: '/dashboard',
            redirect: true,

            email: formData.get('email') as string,
            password: formData.get('password') as string,
        })
}
