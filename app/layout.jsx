import '../globals.css'

export const metadata = {
  title: 'Chapter Health – Take Control',
  description: 'Join the Chapter Health waitlist and take control of your health.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body text-light-balance bg-health-core min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
