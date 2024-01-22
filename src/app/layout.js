
export const metadata = {
    robots: { index: false, follow: false},
    prefetch: { href: 'google.com'},
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children, params }) {
    return (
        <html lang={params.locale}>
        <body>

            {children}

        </body>
        </html>
    )
}
