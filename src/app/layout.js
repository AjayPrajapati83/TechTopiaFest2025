import { Fredoka, Play } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const fredoka = Fredoka({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})
const play = Play({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'TechTopia',
  description: 'TechTopia next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>TechTopia</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon_io/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon_io/android-chrome-512x512.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          precedence="default"
        />

      </head>
      <body className={fredoka.className + ' ' + play.className}>
        <Navbar />
        {children}
        <Footer title='TechTopia'/>
      </body>
    </html>
  )
}
