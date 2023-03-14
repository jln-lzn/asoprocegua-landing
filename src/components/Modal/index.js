import Image from "next/image"

const Modal = ({ modalState, setModalState }) => {
  const grass = "/images/grass footer.svg"
  const rock = "/images/rock footer.svg"

  return (
    <>
      <div
        className={`w-screen justify-center items-center ${
          modalState ? "flex" : "hidden"
        } h-full md:h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] font-sans z-[99]`}
      >
        <div className="w-full md:h-[80vh] md:h-auto md:w-[700px] bg-white relative pt-4 rounded-lg md:pb-36 md:pt-24 overflow-hidden">
          <div className="px-10 py-8 md:py-0 md:px-16">
            <p className="mb-5 leading-6 text-lg">
              Te invitamos a que contribuyas con el desarrollo sostenible del
              Guaviare, uno de los departamentos con mayor riesgo de
              deforestación. Las comunidades campesinas estamos listas para
              defender nuestra Amazonía si nos apoyas en este camino.{" "}
              <span className="font-bold">Contáctanos para conocer más</span>
            </p>
            <button
              onClick={() => setModalState(!modalState)}
              className="absolute top-4 right-5 md:right-8 cursor-pointer text-2xl font-normal"
            >
              X
            </button>
            <form>
              <div className="flex flex-col mb-4">
                <label htmlFor="nombre" className="text-[#9DCA55]">
                  Nombre
                </label>
                <input
                  className="focus:border-[#9DCA55] shadow-sm focus:shadow-[#9DCA55] border-gray-300 border rounded mt-2 h-[59px] pl-5 outline-none"
                  type="text"
                  name="nombre"
                  id="nombre"
                  required
                  placeholder="Nombre Completo"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="correo" className="text-[#9DCA55]">
                  Correo
                </label>
                <input
                  className="focus:border-[#9DCA55] shadow-sm focus:shadow-[#9DCA55] border-gray-300 border rounded mt-2 h-[59px] pl-5 outline-none"
                  type="text"
                  name="correo"
                  id="correo"
                  required
                  placeholder="Tu Email"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="asunto" className="text-[#9DCA55]">
                  Asunto del mensaje
                </label>
                <textarea
                  className="focus:border-[#9DCA55] shadow-sm focus:shadow-[#9DCA55] h-[59px] md:h-[140px] border-gray-300 border rounded mt-2 pl-5 pt-5 outline-none"
                  name="asunto"
                  id="asunto"
                  required
                  placeholder="Escribe aquí"
                />
              </div>
              <button className="w-full text-lg md:w-[190px] h-[59px] bg-green-text-2 rounded">
                Enviar
              </button>
            </form>
          </div>
          <Image
            className="w-full hidden md:block absolute bottom-[-115px]"
            src={grass}
            width={769.49}
            height={211.63}
          />
          <Image
            className="absolute hidden md:block bottom-5 right-0"
            src={rock}
            width={344}
            height={135.43}
          />
        </div>
      </div>
    </>
  )
}

export default Modal
