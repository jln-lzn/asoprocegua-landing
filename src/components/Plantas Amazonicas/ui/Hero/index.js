const Hero = () => {
  const left_plant = "/images/left plant.svg"
  const right_plant = "/images/right plant.svg"

  return (
    <section className="bg-light-bg-2">
      <div className="flex items-center justify-center font-sans md:h-screen relative">
        <img
          src={left_plant}
          className="absolute top-50 left-0 z-0 opacity-30 2xl:opacity-100"
        />
        <div className="w-full max-w-2xl flex flex-col justify-center items-center gap-5 p-4 md:max-w-6xl z-10">
          <div className="w-full flex justify-start md:justify-center">
            <h2 className="text-left text-4xl leading-10 font-medium md:text-center md:text-6xl">
              Beneficios de las plantas amazónicas
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
        </div>
        <img
          src={right_plant}
          className="absolute top-50 right-0 z-0 opacity-30 2xl:opacity-100"
        />
      </div>
    </section>
  )
}

export default Hero
