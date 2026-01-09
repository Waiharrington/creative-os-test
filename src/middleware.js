import { NextResponse } from 'next/server'

export function middleware(request) {
    // Obtener cookie de sesión
    const session = request.cookies.get('session')
    const { pathname } = request.nextUrl

    // Si estamos en login y hay sesión, redirigir a home
    if (pathname === '/login' && session) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    // Si no hay sesión y no estamos en login (ni recursos estáticos), redirigir a login
    if (!session && pathname !== '/login' && !pathname.startsWith('/_next')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
