import '@/styles/globals.css'
import { Archivo } from '@next/font/google'

const archivo = Archivo({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={archivo.className}>
      <Component {...pageProps} />
    </main>
  )
}
