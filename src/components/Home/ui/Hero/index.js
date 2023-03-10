import Modal from "@/components/Modal"
import Image from "next/image"
import { useState } from "react"

const Hero = () => {
  const [modalState, setModalState] = useState(false)
  const arrow = "/images/arrow.svg"
  const right_plant = "/images/right plant.svg"
  const left_plant = "/images/left plant.svg"
  const lianas = "/images/lianas.svg"
  const bird = "/images/bird1.svg"
  const big_bush = "/images/big bush.svg"
  const small_bush = "/images/small bush.svg"
  const animal = "/images/animal.svg"
  const bg_tree1 = "/images/bg tree1.svg"
  const bg_tree2 = "/images/bg tree2.svg"
  const bg_tree3 = "/images/bg tree3.svg"
  const bg_plant = "/images/bg plant.svg"

  return (
    <>
      <section className="md:h-[60vh] bg-[#F8F8F8] flex items-center justify-center font-sans relative">
        <div className="w-full max-w-2xl flex flex-col justify-center items-center gap-5 p-4 md:max-w-6xl">
          <h2 className="text-left text-4xl leading-10 font-medium md:text-center md:text-6xl z-30">
            Nuestra misión es representar a los campesinos del Guaviare,
            consolidar cadenas productivas con valor agregado.
          </h2>
          <div className="w-full flex justify-left md:justify-center z-10">
            <hr className="w-full max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
          </div>
          <p className="text-left text-lg leading-8 text-disabled-text md:text-xl md:text-center z-30">
            Desarrollar proyectos sostenibles con la conservación de los bosques
            y el medio ambiente, agropecuarios, frutales amazónicos, maderables
            y no maderables del bosque y de liderazgo comunitario, social,
            turístico y ambiental.
          </p>
          <button
            onClick={() => setModalState(!modalState)}
            className="w-full z-10 mb-40 md:mb-0 h-[59px] bg-green-text-2 text-[18px] md:hidden"
          >
            Contáctanos
          </button>
          <div className="border border-gray-300 rounded-full p-6 cursor-pointer mt-10 hidden md:block z-[33]">
            <Image src={arrow} width={24.05} height={24.05} />
          </div>
          <img
            src={left_plant}
            alt="left-plant"
            className="absolute hidden transition-all duration-75 ease-out md:block top-[-50px] left-0 z-10"
          />
          <img
            src={right_plant}
            alt="right-plant"
            className="absolute hidden transition-all duration-75 ease-out md:block top-[-50px] right-0 z-10"
          />
          <img
            src={lianas}
            alt="lianas"
            className="absolute hidden transition-all duration-75 ease-out md:block top-[-80px] right-[100px]"
          />
          <img
            src={bird}
            alt="bird"
            className="absolute hidden transition-all duration-75 ease-out md:block top-5 right-[250px] z-10"
          />
          <img
            src={big_bush}
            alt="big_bush"
            className="absolute w-[169.58px] transition-all duration-75 ease-out md:w-auto left-[-10px] lg:left-[-70px] bottom-[-10px] lg:bottom-[-30px] z-10"
          />
          <img
            src={small_bush}
            alt="small_bush"
            className="absolute w-[107.69px] transition-all duration-75 ease-out md:w-auto left-24 lg:left-[200px] bottom-[-10px] lg:bottom-[-30px] z-20"
          />
          <img
            src={big_bush}
            alt="big_bush"
            className="absolute w-[169.58px] transition-all duration-75 ease-out md:w-auto right-0 bottom-[-30px] z-10"
          />
          <img
            src={small_bush}
            alt="small_bush"
            className="absolute w-[107.69px] transition-all duration-75 ease-out md:w-auto right-24 lg:right-[280px] bottom-[-20px] z-10"
          />
          <img
            src={animal}
            alt="animal"
            className="absolute w-[119.68px] transition-all duration-75 ease-out md:w-auto left-24 lg:left-[310px] bottom-0 z-10"
          />
          <img
            src={bg_tree1}
            alt="tree1"
            className="absolute w-[206px] transition-all duration-75 ease-out md:w-auto left-0 bottom-0"
          />
          <img
            src={bg_tree1}
            alt="tree1"
            className="absolute w-[206px] transition-all duration-75 ease-out md:w-auto right-0 bottom-0"
          />
          <img
            src={bg_tree2}
            alt="tree2"
            className="absolute hidden md:block transition-all duration-75 ease-out right-[250px] bottom-0"
          />
          <img
            src={bg_plant}
            alt="plant"
            className="absolute w-[264.97px] md:w-auto transition-all duration-75 ease-out left-0 bottom-0"
          />
          <img
            src={bg_plant}
            alt="plant"
            className="absolute w-[264.97px] md:w-auto transition-all duration-75 ease-out right-[100px] bottom-0"
          />
          <img
            src={bg_tree3}
            alt="tree3"
            className="absolute w-[129.08px] md:w-auto transition-all duration-75 ease-out left-0 bottom-0"
          />
          <img
            src={bg_tree3}
            alt="tree3"
            className="absolute w-[129.08px] md:w-auto transition-all duration-75 ease-out scale-x-[-1] right-0 bottom-0"
          />
        </div>
      </section>
      <Modal modalState={modalState} setModalState={setModalState} />
      <div className="w-full h-[131px] bg-[#3D7D40]"></div>
    </>
  )
}

export default Hero
