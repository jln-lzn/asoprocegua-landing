import Beneficios from '@/components/Plantas Amazonicas/ui/Beneficios'
import Hero from '@/components/Plantas Amazonicas/ui/Hero'
import Resolution from '@/components/Resolution'
import Head from 'next/head'

const plantas_amazonicas = () => {
  return (
    <>
      <Head>
        <title>Beneficios Plantas Amazonicas | Asoprocegua</title>
      </Head>
      <Hero />
      <Beneficios />
      <Resolution />
    </>
  )
}

export default plantas_amazonicas
