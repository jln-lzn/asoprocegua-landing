import { useState } from 'react'
import sendEmailSB from '@/pages/api/sendingBlue'
import { toast } from 'sonner'

const Modal = ({ modalState, setModalState }) => {
  const modal = '/images/modal.svg'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await sendEmailSB(1, ['asociacionasoprocegua@gmail.com'], {
        name,
        email,
        message,
      })

      setName('')
      setEmail('')
      setMessage('')
      toast('Mensaje enviado')
      setModalState(false)
    } catch (error) {
      toast.error('No fue posible enviar el mensaje')
    }
  }

  const handleClose = () => {
    setModalState(!modalState)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <div
        className={`w-screen justify-center items-center ${
          modalState ? 'flex' : 'hidden'
        } h-full md:h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] font-sans z-[99]`}
      >
        <div className="w-full sm:w-[650px] bg-white pt-5 rounded-lg">
          <button
            onClick={handleClose}
            className="cursor-pointer float-right mr-6 text-2xl font-normal"
          >
            X
          </button>
          <div className="px-10 mt-8">
            <p className="mb-5 leading-6 text-base">
              Te invitamos a que contribuyas con el desarrollo sostenible del
              Guaviare, uno de los departamentos con mayor riesgo de
              deforestación. Las comunidades campesinas estamos listas para
              defender nuestra Amazonía si nos apoyas en este camino.{' '}
              <span className="font-bold">Contáctanos para conocer más</span>
            </p>
            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col mb-4">
                <label htmlFor="nombre" className="text-[#9DCA55]">
                  Nombre
                </label>
                <input
                  className="focus:border-[#9DCA55] shadow-sm focus:shadow-[#9DCA55] border-gray-300 border rounded mt-2 h-[57px] pl-5 outline-none"
                  type="text"
                  name="name"
                  id="nombre"
                  required
                  placeholder="Nombre Completo"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="correo" className="text-[#9DCA55]">
                  Correo
                </label>
                <input
                  className="focus:border-[#9DCA55] shadow-sm focus:shadow-[#9DCA55] border-gray-300 border rounded mt-2 h-[57px] pl-5 outline-none"
                  type="text"
                  name="mail"
                  id="correo"
                  required
                  placeholder="Tu Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="asunto" className="text-[#9DCA55]">
                  Asunto del mensaje
                </label>
                <textarea
                  className="focus:border-[#9DCA55] shadow-sm focus:shadow-[#9DCA55] h-[59px] md:h-[115px] border-gray-300 border rounded mt-2 pl-5 pt-5 outline-none"
                  name="comment"
                  id="asunto"
                  required
                  placeholder="Escribe aquí"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
              <button
                type="submit"
                className="w-full text-lg md:w-[190px] mb-6 md:mb-0 h-[54px] bg-green-text-2 rounded"
              >
                Enviar
              </button>
            </form>
          </div>
          <img
            className="hidden md:block max-h-[125px] w-full rounded-lg"
            src={modal}
            alt="footer"
          />
        </div>
      </div>
    </>
  )
}

export default Modal
