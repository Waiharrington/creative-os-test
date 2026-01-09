import './globals.css'

export const metadata = {
    title: 'Andrea & Wai - Finanzas Compartidas',
    description: 'Plataforma personal de ahorro compartido',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    )
}
