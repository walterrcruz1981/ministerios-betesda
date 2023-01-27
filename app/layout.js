import './globals.css'
import Footer from './(home-components)/Footer'
import NavBar from './(home-components)/NavBar'
import SessionProvider from './SessionProvider'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <SessionProvider>
          <NavBar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
