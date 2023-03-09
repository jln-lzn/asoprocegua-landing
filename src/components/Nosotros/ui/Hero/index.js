import Image from "next/image"

const Hero = () => {
  const arrow = "/images/arrow.svg"

  return (
    <section className="md:h-screen bg-[#fdfdfd] flex items-center justify-center font-sans">
      <div className="w-full max-w-2xl flex flex-col justify-center items-center gap-5 p-4 md:max-w-6xl">
        <div className="w-full flex justify-start md:justify-center">
          <h2 className="text-left text-4xl leading-10 font-medium md:text-center md:text-6xl">
            Acerca de Nosotros
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
          <Image src={arrow} width={24.05} height={24.05} />
        </div>
      </div>
    </section>
  )
}

export default Hero
