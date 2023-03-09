const Apoyar = () => {
  return (
    <section className="flex justify-center items-center py-14 font-sans bg-light-bg-2 bg-gradient-to-b from-[#3d7d40] to-[#9dca5500]">
      <div className="flex justify-center items-center flex-col bg-gradient-to-b from-[#e8e7e8] to-[#f8f8f8] mx-5 rounded-lg px-5 py-16 md:py-56 md:px-8 md:max-w-6xl">
        <h2 className="text-4xl font-medium text-left md:text-center mb-4">
          ¿Cómo puedes apoyarnos?
        </h2>
        <div className="w-full flex justify-left md:justify-center mb-4">
          <hr className="w-full max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
        </div>
        <p className="mb-8 text-disabled-text leading-6 text-xl text-left md:text-center">
          Estamos activamente buscando mercados para vender nuestros productos,
          en los que se encuentran pulpa congelada de PNMB, como es Asaí
          (Euterpe Precatoria) Moriche (Maurutia Fleuxosa) y Seje (Oenocarpus
          Bataua) y liofilizado de asai, productos  transformados y muchos otros
          más productos Amazónicos. También buscamos donaciones y proyectos para
          consolidar nuestra asociación.
        </p>
        <button className="w-full h-[59px] bg-green-text text-[18px] shadow-md shadow-green-text text-white md:hidden">
          Contáctanos
        </button>
      </div>
    </section>
  )
}

export default Apoyar
