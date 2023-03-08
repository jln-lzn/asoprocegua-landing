import "@/styles/globals.css"
import Layout from "@/components/layout"
import { Archivo } from "@next/font/google"

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main className={archivo.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
