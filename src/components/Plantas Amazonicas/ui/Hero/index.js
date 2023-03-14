import Modal from "@/components/Modal"
import Image from "next/image"
import { useState } from "react"

const Hero = () => {
  const [modalState, setModalState] = useState(false)
  const left_plant = "/images/left plant.svg"
  const right_plant = "/images/right plant.svg"
  const arrow = "/images/arrow.svg"

  return (
    <section className="bg-[#fdfdfd]">
      <div className="flex items-center md:h-[40vh] md:mt-36 justify-center font-sans relative">
        <Image
          src={left_plant}
          className="absolute -top-10 hidden left-0 z-0 md:block opacity-100"
          width={182}
          height={396}
          alt="plant"
        />
        <div className="w-full max-w-2xl lg:max-w-4xl flex flex-col justify-center items-center gap-5 p-4 z-10">
          <div className="w-full flex justify-start md:justify-center">
            <h2 className="text-left text-4xl leading-[38.73px] md:leading-[62.93px] font-medium md:text-center md:text-6xl z-30">
              Beneficios de las plantas amazónicas
            </h2>
          </div>
          <div className="w-full flex justify-start md:justify-center">
            <hr className="w-full max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
          </div>
          <p className="text-left text-lg leading-[21.84px] md:leading-[34.1px] md:mx-16 2xl:mx-0 text-disabled-text md:text-xl md:text-center z-30">
            Nuestra misión es representar a los campesinos del Guaviare,
            consolidar cadenas productivas con valor agregado. Desarrollar
            proyectos agropecuarios, frutales amazónicos, maderables y no
            maderables del bosque y de liderazgo comunitario, turístico y
            ambiental.
          </p>
          <button
            onClick={() => setModalState(!modalState)}
            className="w-full h-[59px] bg-green-text-2 text-[18px] md:hidden"
          >
            Contáctanos
          </button>
          <div className="border border-gray-300 rounded-full p-6 cursor-pointer mt-10 hidden md:block">
            <Image src={arrow} width={24.05} height={24.05} alt="arrow" />
          </div>
        </div>
        <Image
          src={right_plant}
          className="absolute -top-10 hidden right-0 z-0 md:block opacity-100"
          width={182}
          height={396}
          alt="plant"
        />
      </div>
      <Modal modalState={modalState} setModalState={setModalState} />
    </section>
  )
}

export default Hero
