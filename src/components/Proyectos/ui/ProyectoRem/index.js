import Image from "next/image"

const ProyectoRem = () => {
  const img2 = "/images/img2.png"
  const img3 = "/images/img3.png"
  const img4 = "/images/img4.png"
  const img5 = "/images/img5.png"
  const img6 = "/images/img6.png"

  return (
    <section className="bg-[#fdfdfd] flex items-center flex-col justify-center font-sans mt-6 px-5">
      <div className="w-full flex flex-col mt-4 justify-center relative items-center rounded-lg gap-5 py-8 lg:py-16 px-4 md:px-8 md:max-w-6xl">
        <div className="flex flex-col md:flex-row">
          <div className="">
            <h3 className="font-bold text-4xl uppercase md:mr-12 mb-4">
              Proyecto REM+ VA
            </h3>
            <div className="w-full flex justify-start mb-4">
              <hr className="w-full max-w-[160px] border-t-4 border-[#9DCA55] border-l-0 border-r-0" />
            </div>
            <p className="text-left leading-8 text-xl font-medium mb-4">
              Monto del proyecto: 3’255,727,086
            </p>
          </div>
          <p className="text-left lg:w-1/2 leading-8 text-disabled-text text-lg mb-5">
            Por medio de este proyecto hemos beneficiado a más de 170 familias
            campesinas con un servicio de extensión agropecuaria y apoyándolos
            en sus proyectos productivos. Además obtuvimos financiación para la
            consolidación y construcción  de nuestra planta de procesamiento de
            fruta de Asai, Seje, y Moriche
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center gap-3">
          <Image
            className="w-full md:w-[353px] object-contain"
            src={img2}
            width={353}
            height={413}
            alt="img1"
          />
          <Image
            className="w-full md:w-[560px] object-contain"
            src={img4}
            width={353}
            height={413}
            alt="img2"
          />
          <Image
            className="w-full md:w-[340px] object-contain"
            src={img3}
            width={353}
            height={413}
            alt="img3"
          />
          <Image
            className="w-full md:w-[340px] object-contain"
            src={img5}
            width={353}
            height={413}
            alt="img4"
          />
          <Image
            className="w-full md:w-[340px] object-contain"
            src={img6}
            width={353}
            height={413}
            alt="img5"
          />
        </div>
        <div className="w-full flex justify-start md:justify-center mt-20">
          <hr className="w-full border-t-2 border-[#E8E7E8] border-l-0 border-r-0" />
        </div>
      </div>
    </section>
  )
}

export default ProyectoRem
