import Image from "next/image"

const Proyectos = () => {
  const arrow = "/images/arrow.svg"
  const img1 = "/images/img1.png"
  const img2 = "/images/img2.png"
  const img3 = "/images/img3.png"

  return (
    <section className="md:h-screen bg-[#fdfdfd] overflow-hidden flex items-center flex-col justify-center font-sans mt-6 px-5">
      <div className="w-full">
        <h2 className="text-left mx-1 text-4xl leading-10 font-medium md:text-center md:text-6xl mb-4">
          Nuestros proyectos
        </h2>
        <div className="w-full mx-1 flex justify-left md:justify-center mb-4">
          <hr className="w-full max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
        </div>
      </div>
      <div className="w-full flex flex-col mt-4 justify-center mb-96 md:mb-0 relative items-center rounded-lg gap-5 py-8 lg:py-16 px-4 md:px-8 md:max-w-6xl border border-[#E8E7E8]">
        <div className="w-full flex items-center mt-8">
          <h3 className="font-bold text-3xl uppercase md:text-4xl mr-12">
            Proyecto REM+ VA
          </h3>
          <div className="border border-gray-300 rounded-full p-6 cursor-pointer">
            <Image
              className="rotate-[270deg]"
              src={arrow}
              width={24.05}
              height={24.05}
            />
          </div>
        </div>
        <p className="text-left leading-8 text-disabled-text text-xl mb-5 lg:mr-[500px]">
          Por medio de este proyecto hemos beneficiado a más de 170 familias
          campesinas con un servicio de extensión agropecuaria y apoyándolos en
          sus proyectos productivos. Además obtuvimos financiación para la
          consolidación y construcción  de nuestra planta de procesamiento de
          fruta de Asai, Seje, y Moriche
        </p>
        <div className="w-full mb-8">
          <p className="text-left leading-8 text-xl font-medium">
            Monto del proyecto: 3’255,727,086
          </p>
        </div>
        <img
          className="absolute bottom-[-170px] left-8 lg:w-[128px] lg:left-auto lg:right-[200px] lg:top-5"
          src={img1}
          alt="img1"
        />
        <img
          className="absolute bottom-[-170px] left-36 lg:w-[235px] lg:left-auto lg:right-[-45px] lg:top-[-40px]"
          src={img2}
          alt="img2"
        />
        <img
          className="absolute bottom-[-335px] left-24 lg:w-[380px] lg:left-auto lg:right-[-45px] lg:top-[250px]"
          src={img3}
          alt="img3"
        />
      </div>
    </section>
  )
}

export default Proyectos
