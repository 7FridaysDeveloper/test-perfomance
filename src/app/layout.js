import Header from '@/widgets/header/header'

import './globals.css'

export const metadata = {
    robots: { index: false, follow: false},
    prefetch: { href: 'google.com'},
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <main className={'main_flex_container'}>
            <Header/>
            {children}
        </main>
        </body>
        </html>
    )
}
