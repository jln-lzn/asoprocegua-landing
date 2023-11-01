import Hero from "@/components/Nosotros/ui/Hero"
import QuienesSomos from "@/components/Nosotros/ui/Quienes Somos"
import Vision from "@/components/Nosotros/ui/Vision"
import Head from "next/head"

const Nosotros = () => {
  return (
    <>
      <Head>
        <title>Nosotros | Asoprocegua</title>
      </Head>
      <Hero />
      <Vision />
      <QuienesSomos />
    </>
  )
}

export default Nosotros
