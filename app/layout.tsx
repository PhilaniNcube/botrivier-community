import Navbar from './Navbar'
import './globals.css'

export const metadata = {
  title: 'Botrivier Community',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       <Navbar />
          {children}
      </body>
    </html>
  )
}
