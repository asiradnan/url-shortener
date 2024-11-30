import './globals.css'
 
export const metadata = {
  title: 'URL Shortener',
  description: 'Transform your long URLs into short, memorable links',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}