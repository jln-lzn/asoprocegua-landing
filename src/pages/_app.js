import { useEffect, useState } from "react"
import { Toaster } from 'sonner'
import Layout from "@/components/layout"
import { Archivo } from "@next/font/google"
import "@/styles/globals.css"

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-archivo",
})

export default function App({ Component, pageProps }) {
  const [font, setFont] = useState(false)
  useEffect(() => {
    setFont(true)
  }, [])

  return (
    <main className={`${archivo.variable}`}>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {font ? (
        <style js="true" global="true">
          {`
            :root {
              --font-archivo: ${archivo.style.fontFamily};
            }
          `}
        </style>
      ) : (
        ""
      )}
    </main>
  )
}
