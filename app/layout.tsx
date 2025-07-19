export const metadata = {
  title: {
    template: 'home/ %s ',
    default: 'home',
  },
  description: 'an app for testing the skills of a frontend developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
