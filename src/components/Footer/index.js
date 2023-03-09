const Footer = () => {
  const bg_footer = "/images/bg footer.svg"
  const rock_footer = "/images/rock footer.svg"

  const phone = "/images/phone.svg"
  const mail = "/images/mail.svg"
  const fb = "/images/fb.svg"
  const ig = "/images/ig.svg"

  return (
    <div className="bg-light-bg-2 font-sans">
      <div className="flex items-center justify-center p-5">
        <div className="w-full max-w-4xl flex justify-center items-center flex-col gap-6">
          <p className="text-left md:text-center text-2xl leading-10 text-disabled-text">
            Te invitamos a que contribuyas con el desarrollo sostenible del
            Guaviare, uno de los departamentos con mayor riesgo de
            deforestación. Las comunidades campesinas estamos listas para
            defender nuestra Amazonía si nos apoyas en este camino. Contáctanos
            para conocer más
          </p>
          <form className="flex flex-col md:flex-row items-center w-full md:justify-center">
            <input
              type="text"
              className="text-lg w-full mr-0 md:mr-4 mb-4 md:mb-0 rounded bg-light-bg-2 pl-5 border border-[#E8E7E8] outline-none md:w-[430px] h-[59px]"
              placeholder="Tu correo"
            />
            <button className="w-full text-lg md:w-[190px] h-[59px] shadow-md shadow-green-text-2 bg-green-text-2 rounded">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-start lg:justify-around flex-col lg:flex-row items-start lg:items-center gap-5 p-5 bg-green-text text-white">
        <div className="flex gap-2">
          <img src={phone} />
          <span>+57 318 7692579</span>
        </div>
        <div className="flex gap-2">
          <img src={mail} />
          <p>asociacionasoprocegua@gmail.com</p>
        </div>
        <div className="flex gap-2">
          <img src={fb} />
          <p>asoproceguaguaviare</p>
        </div>
        <div className="flex gap-2">
          <img src={ig} />
          <p>asoproceguaguaviare</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
