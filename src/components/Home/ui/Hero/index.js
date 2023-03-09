import Image from "next/image"

const Hero = () => {
  const arrow = "/images/arrow.svg"
  const home = "/images/home.svg"

  return (
    <section className="md:h-screen bg-[#fdfdfd] flex items-center justify-center font-sans relative">
      <div className="w-full max-w-2xl flex flex-col justify-center items-center gap-5 p-4 md:max-w-6xl">
        <h2 className="text-left text-2xl leading-10 font-medium md:text-center md:text-6xl z-10">
          Nuestra misión es representar a los campesinos del Guaviare,
          consolidar cadenas productivas con valor agregado.
        </h2>
        <div className="w-full flex justify-left md:justify-center z-10">
          <hr className="w-full max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
        </div>
        <p className="text-left text-lg leading-8 text-disabled-text md:text-xl md:text-center z-10">
          Desarrollar proyectos sostenibles con la conservación de los bosques y
          el medio ambiente, agropecuarios, frutales amazónicos, maderables y no
          maderables del bosque y de liderazgo comunitario, social, turístico y
          ambiental.
        </p>
        <button className="w-full z-10 h-[59px] bg-green-text-2 text-[18px] md:hidden">
          Contáctanos
        </button>
        <div className="border z-10 border-gray-300 rounded-full p-6 cursor-pointer mt-10 hidden md:block">
          <Image src={arrow} width={24.05} height={24.05} />
        </div>
        <img src={home} className="absolute w-full z-0" />
      </div>
    </section>
  )
}

export default Hero
