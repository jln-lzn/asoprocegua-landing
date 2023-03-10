import Image from "next/image"

const Hero = () => {
  const left_plant = "/images/left plant.svg"
  const right_plant = "/images/right plant.svg"
  const arrow = "/images/arrow.svg"

  return (
    <section className="bg-[#fdfdfd]">
      <div className="flex items-center justify-center font-sans md:py-36 relative">
        <Image
          src={left_plant}
          className="absolute top-50 left-0 z-0 opacity-70 2xl:opacity-100"
          width={182}
          height={396}
          alt="plant"
        />
        <div className="w-full max-w-2xl flex flex-col justify-center items-center gap-5 p-4 md:max-w-6xl z-10">
          <div className="w-full flex justify-start md:justify-center">
            <h2 className="text-left text-4xl leading-10 font-medium md:text-center md:text-6xl">
              Proyectos
            </h2>
          </div>
          <div className="w-full flex justify-start md:justify-center">
            <hr className="w-full max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
          </div>
          <p className="text-left leading-8 text-disabled-text text-xl md:text-center">
            Nuestra misión es representar a los campesinos del Guaviare,
            consolidar cadenas productivas con valor agregado. Desarrollar
            proyectos agropecuarios, frutales amazónicos, maderables y no
            maderables del bosque y de liderazgo comunitario, turístico y
            ambiental.
          </p>
          <button className="w-full h-[59px] bg-green-text-2 text-[18px] md:hidden">
            Contáctanos
          </button>
          <div className="border border-gray-300 rounded-full p-6 cursor-pointer mt-10 hidden md:block">
            <Image src={arrow} width={24.05} height={24.05} alt="arrow" />
          </div>
          <div className="w-full flex justify-start md:justify-center mt-20">
            <hr className="w-full border-t-2 border-[#E8E7E8] border-l-0 border-r-0" />
          </div>
        </div>
        <Image
          src={right_plant}
          className="absolute top-50 right-0 z-0 opacity-70 2xl:opacity-100"
          width={182}
          height={396}
          alt="plant"
        />
      </div>
    </section>
  )
}

export default Hero
