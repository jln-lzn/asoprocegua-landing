import Image from "next/image"

const Hero = () => {
  const guepardo = "/images/guepardo.svg"
  const small_plant = "/images/small plant left.svg"
  const big_plant = "/images/big plant left.svg"
  const arrow = "/images/arrow.svg"

  return (
    <section className="md:h-screen bg-[#fdfdfd] flex items-center justify-center font-sans">
      <div className="w-full max-w-2xl flex flex-col justify-center items-center gap-5 p-4 md:max-w-6xl">
        <h2 className="text-left text-4xl leading-10 font-medium md:text-center md:text-6xl">
          Nuestra misión es representar a los campesinos del Guaviare,
          consolidar cadenas productivas con valor agregado.
        </h2>
        <div className="w-full flex justify-left md:justify-center">
          <hr className="w-full max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
        </div>
        <p className="text-left leading-8 text-disabled-text text-xl md:text-center">
          Desarrollar proyectos sostenibles con la conservación de los bosques y
          el medio ambiente, agropecuarios, frutales amazónicos, maderables y no
          maderables del bosque y de liderazgo comunitario, social, turístico y
          ambiental.
        </p>
        <button className="w-full h-[59px] bg-green-text-2 text-[18px] md:hidden">
          Contáctanos
        </button>
        <div className="border border-gray-300 rounded-full p-6 cursor-pointer mt-10 hidden md:block">
          <Image src={arrow} width={24.05} height={24.05} />
        </div>
        {/* <div className={styles.images_container}>
          <Image
            className={styles.big_plant}
            src={big_plant}
            width={423.06}
            height={162.47}
            alt="big-plant"
          />
          <Image
            className={styles.small_plant}
            src={small_plant}
            width={240.6}
            height={93.48}
            alt="small-plant"
          />
          <Image src={guepardo} width={190.1} height={321.88} alt="guepardo" />
        </div> */}
      </div>
    </section>
  )
}

export default Hero
