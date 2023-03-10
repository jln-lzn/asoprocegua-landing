import { useState } from "react"
import { Dialog, Popover } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Example() {
  const menuItems = [
    {
      label: "Inicio",
      route: "/",
    },
    {
      label: "Nosotros",
      route: "/nosotros",
    },
    {
      label: "Nuestros Proyectos",
      route: "/proyectos",
    },
    {
      label: "Plantas Amazónicas",
      route: "/plantas-amazonicas",
    },
  ]
  const logo = "/images/logo asoprocegua.jpg"
  const router = useRouter()
  const pathName = router.pathname
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  console.log(mobileMenuOpen)

  return (
    <header className="bg-white relative z-50 font-sans">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"} className="-m-1.5 p-1.5">
            <Image src={logo} width={204} height={46.59} alt="logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {menuItems.map((item) => {
            const isSelected = pathName === item.route
            return (
              <Link
                key={item.route}
                className={`${"text-disabled-text font-medium"} ${
                  isSelected &&
                  "relative text-green-text after:block after:w-3 after:h-3 after:content-[` `] after:rounded-3xl after:bg-green-text-2 after:absolute after:bottom-[-15px] after:left-[40%]"
                }`}
                href={item.route}
              >
                {item.label}
              </Link>
            )
          })}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="bg-green-text-2 w-[150px] h-[59px] text-lg">
            Contáctanos
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden z-40 relative"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-8 font-sans">
                {menuItems.map((item) => {
                  return (
                    <Link
                      key={item.route}
                      className={
                        "text-disabled-text font-medium -mx-3 block rounded-lg py-2 px-3 text-base leading-7"
                      }
                      href={item.route}
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
