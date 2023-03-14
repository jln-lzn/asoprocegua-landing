import Image from "next/image"

const Footer = () => {
  const rock = "/images/rock.svg"
  const grass1 = "/images/grass1.svg"
  const grass2 = "/images/grass2.svg"
  const grass3 = "/images/grass3.svg"
  const left = "/images/left plant.svg"
  const phone = "/images/phone.svg"
  const mail = "/images/mail.svg"
  const fb = "/images/fb.svg"
  const ig = "/images/ig.svg"

  return (
    <div className="bg-[#fdfdfd] font-sans">
      <div className="flex items-center justify-center px-5 pb-[470px]">
        <div className="w-full max-w-4xl flex justify-center items-center flex-col gap-6 mb-36">
          <p className="text-left md:text-center text-lg md:text-2xl leading-10 text-disabled-text mt-14 lg:mt-0">
            Te invitamos a que contribuyas con el desarrollo sostenible del
            Guaviare, uno de los departamentos con mayor riesgo de
            deforestación. Las comunidades campesinas estamos listas para
            defender nuestra Amazonía si nos apoyas en este camino. Contáctanos
            para conocer más
          </p>
          <form className="flex flex-col md:flex-row items-center w-full md:justify-center">
            <input
              type="text"
              className="text-lg w-full mr-0 md:mr-4 mb-4 md:mb-0 rounded bg-[#fdfdfd] pl-5 border border-[#E8E7E8] outline-none md:w-[430px] h-[59px]"
              placeholder="Tu correo"
            />
            <button className="w-full text-lg md:w-[190px] h-[59px] shadow-md shadow-green-text-2 bg-green-text-2 rounded">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="relative md:mt-36 overflow-x-clip">
        <img
          src={grass1}
          alt="grass1"
          className="w-full absolute bottom-0 left-0 z-20 scale-[3.5] lg:scale-100"
        />
        <img
          src={grass2}
          alt="grass2"
          className="w-full absolute bottom-28 lg:bottom-0 right-0 z-[11] scale-[3.5] md:scale-125 lg:scale-100"
        />
        <img
          src={grass3}
          alt="grass3"
          className="w-full absolute bottom-36 lg:bottom-0 left-0 z-10 hidden md:block"
        />
        <img
          src={rock}
          alt="rock"
          className="absolute bottom-[190px] md:bottom-[200px] right-0 z-20 w-[450px] lg:w-[580px] 2xl:w-[870px]"
        />
        <img
          src={left}
          className="absolute left-0 bottom-0 z-50 hidden lg:block"
          alt="left plant"
        />
        <div className="flex justify-start lg:justify-around absolute -bottom-12 md:bottom-0 w-full flex-col lg:flex-row items-start lg:items-center gap-5 px-10 lg:px-5 lg:py-16 text-white">
          <div className="flex gap-2 z-[51]">
            <Image src={phone} width={24} height={24} alt="phone" />
            <span>+57 318 7692579</span>
          </div>
          <div className="flex gap-2 z-[51]">
            <Image src={mail} width={24} height={24} alt="mail" />
            <p>asociacionasoprocegua@gmail.com</p>
          </div>
          <div className="flex gap-2 z-[51]">
            <Image src={fb} width={24} height={24} alt="fb" />
            <p>asoproceguaguaviare</p>
          </div>
          <div className="flex gap-2 z-[51]">
            <Image src={ig} width={24} height={24} alt="ig" />
            <p>asoproceguaguaviare</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
