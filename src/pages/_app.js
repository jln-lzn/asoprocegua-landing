import "@/styles/globals.css"
import Layout from "@/components/layout"
import { Archivo } from "@next/font/google"

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-archivo",
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${archivo.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style js global>
        {`
          :root {
            --font-archivo: ${archivo.style.fontFamily};
          }
        `}
      </style>
    </main>
  )
}
