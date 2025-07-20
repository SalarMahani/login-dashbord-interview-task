import { UserProvider } from '@/context/UserContext'
import styles from './layout.module.scss'
import '../styles/globals.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
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
      <body className={styles.layoutBackground}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
