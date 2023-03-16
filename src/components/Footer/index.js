import Image from 'next/image'
import Modal from '../Modal'
import { useState } from 'react'

const Footer = () => {
  const phone = '/images/phone.svg'
  const mail = '/images/mail.svg'
  const fb = '/images/fb.svg'
  const ig = '/images/ig.svg'
  const footer_mb = '/images/footer-mb.svg'
  const footer_desk = '/images/footer-desk.svg'
  const [modalState, setModalState] = useState(false)

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
          <div className="flex w-full md:w-1/2">
            <button
              onClick={() => setModalState(!modalState)}
              className="bg-green-text-2 w-full h-[59px] text-lg"
            >
              Contáctanos
            </button>
            <Modal modalState={modalState} setModalState={setModalState} />
          </div>
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
