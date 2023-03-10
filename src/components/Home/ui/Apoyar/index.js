import Modal from "@/components/Modal"
import { useState } from "react"

const Apoyar = () => {
  const [modalState, setModalState] = useState(false)

  return (
    <section className="flex justify-center items-center py-14 font-sans bg-light-bg-2 bg-gradient-to-b from-[#3D7D40] to-[#fdfdfd]">
      <div className="flex justify-center items-center flex-col bg-[#F8F8F8] mx-5 rounded-lg px-5 py-16 md:pt-28 md:px-36 md:max-w-6xl">
        <h2 className="text-4xl font-medium text-left md:text-center mb-8">
          ¿Cómo puedes apoyarnos?
        </h2>
        <Modal modalState={modalState} setModalState={setModalState} />
        <div className="w-full flex justify-left md:justify-center mb-4">
          <hr className="w-full max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
        </div>
        <p className="mb-8 text-disabled-text leading-10 text-xl text-left md:text-center mt-4">
          Estamos activamente buscando mercados para vender nuestros productos,
          en los que se encuentran pulpa congelada de PNMB, como es Asaí
          (Euterpe Precatoria) Moriche (Maurutia Fleuxosa) y Seje (Oenocarpus
          Bataua) y liofilizado de asai, productos  transformados y muchos otros
          más productos Amazónicos. También buscamos donaciones y proyectos para
          consolidar nuestra asociación.
        </p>
        <button
          onClick={() => setModalState(!modalState)}
          className="w-full md:w-[258px] h-[59px] bg-green-text text-[18px] shadow-md shadow-green-text text-white"
        >
          Contáctanos
        </button>
      </div>
      <Modal modalState={modalState} setModalState={setModalState} />
    </section>
  )
}

export default Apoyar
