import Beneficios from "@/components/Plantas Amazonicas/ui/Beneficios"
import Hero from "@/components/Plantas Amazonicas/ui/Hero"
import Head from "next/head"

const plantas_amazonicas = () => {
  return (
    <>
      <Head>
        <title>Beneficios Plantas Amazonicas | Asoprocegua</title>
      </Head>
      <Hero />
      <Beneficios />
    </>
  )
}

export default plantas_amazonicas
