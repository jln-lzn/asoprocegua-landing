import Hero from "@/components/Proyectos/ui/Hero"
import ProyectoRem from "@/components/Proyectos/ui/ProyectoRem"
import Head from "next/head"

const proyectos = () => {
  return (
    <>
      <Head>
        <title>Nuestros Proyectos | Asoprocegua</title>
      </Head>
      <Hero />
      <ProyectoRem />
    </>
  )
}

export default proyectos
