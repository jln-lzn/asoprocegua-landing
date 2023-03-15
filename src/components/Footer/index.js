import Image from 'next/image'

const Footer = () => {
  const phone = '/images/phone.svg'
  const mail = '/images/mail.svg'
  const fb = '/images/fb.svg'
  const ig = '/images/ig.svg'
  const footer_mb = '/images/footer-mb.svg'
  const footer_desk = '/images/footer-desk.svg'

  return (
    <div className="bg-[#fdfdfd] font-sans">
      <div className="flex items-center justify-center px-5 mb-24">
        <div className="w-full max-w-4xl flex justify-center items-center flex-col gap-6">
          <p className="text-left md:text-center text-lg md:text-2xl leading-10 text-disabled-text mt-14 lg:mt-0">
            Te invitamos a que contribuyas con el desarrollo sostenible del
            Guaviare, uno de los departamentos con mayor riesgo de
            deforestación. Las comunidades campesinas estamos listas para
            defender nuestra Amazonía si nos apoyas en este camino. Contáctanos
            para conocer más
          </p>
          <form
            action="mailto:asociacionasoprocegua@gmail.com"
            className="flex flex-col md:flex-row items-center w-full md:justify-center"
          >
            <input
              type="text"
              name="mail"
              required
              className="text-lg w-full focus:border-[#9DCA55] shadow-sm focus:shadow-[#9DCA55] mr-0 md:mr-4 mb-4 md:mb-0 rounded bg-[#fdfdfd] pl-5 border border-[#E8E7E8] outline-none md:w-[430px] h-[59px]"
              placeholder="Tu correo"
            />
            <button
              type="submit"
              className="w-full text-lg md:w-[190px] h-[59px] shadow-md shadow-green-text-2 bg-green-text-2 rounded"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="w-full relative">
        <img className="w-full sf:h-[650px] md:hidden" src={footer_mb} />
        <img className="w-full hidden md:block" src={footer_desk} />
        <div className="flex justify-start absolute text-[14px] bottom-[16%] px-14 md:justify-around w-full gap-5 flex-col md:flex-row items-start md:items-center md:gap-8 lg:gap-5 text-white">
          <div className="flex gap-1 z-[51]">
            <Image src={phone} width={21} height={21} alt="phone" />
            <span>+57 318 7692579</span>
          </div>
          <div className="flex gap-1 z-[51]">
            <Image src={mail} width={21} height={21} alt="mail" />
            <p>asociacionasoprocegua@gmail.com</p>
          </div>
          <div className="flex gap-1 z-[51]">
            <Image src={fb} width={21} height={21} alt="fb" />
            <p>asoproceguaguaviare</p>
          </div>
          <div className="flex gap-1 z-[51]">
            <Image src={ig} width={21} height={21} alt="ig" />
            <p>asoproceguaguaviare</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
