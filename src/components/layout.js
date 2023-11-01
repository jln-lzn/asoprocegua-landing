import Navbar from "@/components/Navbar/index"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
