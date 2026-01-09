'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(prevState, formData) {
    const password = formData.get('password')

    // Validar credenciales contra variables de entorno
    if (password === process.env.ANDREA_PASSWORD) {
        const cookieStore = await cookies()
        cookieStore.set('session', 'andrea', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30, // 30 días
            path: '/',
        })
        redirect('/')
    }

    if (password === process.env.WAI_PASSWORD) {
        const cookieStore = await cookies()
        cookieStore.set('session', 'wai', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30, // 30 días
            path: '/',
        })
        redirect('/')
    }

    return { error: 'Contraseña incorrecta' }
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
    redirect('/login')
}
