import Image from 'next/image'

const QuienesSomos = () => {
  const circles = '/images/circles.svg'
  const img7 = '/images/img7.png'
  const img8 = '/images/img8.png'
  const img9 = '/images/img9.png'

  return (
    <>
      <div className="font-sans text-2xl flex justify-center mb-28 md:mb-48 mt-36 md:mt-20 px-5">
        <div className="w-full flex justify-center items-center max-w-2xl 2xl:max-w-6xl relative mx-8">
          <p className="leading-8 md:leading-[47.75px] font-bold mt-4 md:mt-0">
            <span className="relative">
              <span className="text-[#CEDE86] absolute text-[70px] -left-10 lg:-left-14 bottom-0 leading-0 lg:text-[120px]">
                “
              </span>
            </span>
            Una visión de sostenibilidad favorable a la preservación de los
            bosques, con el incentivo a productos maderables y no maderables con
            un manejo ambiental sostenible para una mejor calidad de vida de los
            asociados.{' '}
            <span className="relative">
              <span className="text-[#CEDE86] rotate-[180deg] text-[70px] absolute left-4 bottom-0 lg:bottom-4 leading-0 lg:text-[120px]">
                “
              </span>
            </span>
          </p>
        </div>
        <Image
          src={circles}
          className="absolute"
          width={1103}
          height={1103}
          alt="circles"
        />
      </div>
      <div className="flex justify-center flex-col items-center font-sans mb-72 md:mb-96 relative">
        <div className="max-w-4xl z-40">
          <h2 className="text-4xl leading-10 font-medium text-center mb-8">
            Quiénes somos
          </h2>
          <div className="w-full flex justify-center">
            <hr className="w-full max-w-[140px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
          </div>
          <p className="mt-8 max-w-2xl text-xl leading-10 px-4 lg:px-0">
            Asoprocegua fue creada en 1997 por líderes campesinos de 35 veredas
            del municipio de San José del Guaviare en el departamento del
            Guaviare en la Amazonía Colombiana. La asociación fue formalizada en
            2001, el  7 de Septiembre de 2001 como resultado de diversas
            reuniones comunitarias en donde se planteaba, la ausencia de un
            interlocutor entre el campesino Guaviarense y el estado
            especialmente en el tema relacionado con los cultivos ilícitos.
            Asoprocegua comenzó a vender sus productos en el mercado nacional
            desde 2008.
          </p>
        </div>
        <div className="mt-24 space-y-4 w-full">
          <Image
            src={img7}
            className="absolute w-40 md:w-52 bottom-[-100px] left-8 2xl:w-[246px] 2xl:left-28 2xl:top-0 2xl:bottom-auto"
            width={246}
            height={204}
            alt="img7"
          />
          <Image
            src={img8}
            className="absolute w-40 md:w-52 bottom-[-240px] left-12 md:bottom-[-220px] md:left-36 2xl:w-[383px] 2xl:left-[-50px] 2xl:top-[250px] 2xl:bottom-auto"
            width={383}
            height={255}
            alt="img8"
          />
          <Image
            src={img9}
            className="absolute w-40 md:w-52 bottom-[-170px] right-0 2xl:w-[343px] 2xl:top-[50px] 2xl:bottom-auto"
            width={343}
            height={427}
            alt="img9"
          />
        </div>
      </div>
    </>
  )
}

export default QuienesSomos
