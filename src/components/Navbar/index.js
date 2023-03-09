import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {
  const logo = "/images/logo asoprocegua.jpg"
  const router = useRouter()
  const pathName = router.pathname

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
      label: "Beneficios Plantas Amazónicas",
      route: "/plantas-amazonicas",
    },
  ]

  const [isActive, setIsActive] = useState(false)

  return (
    <nav className="w-full flex justify-between items-center font-sans py-5 bg-white">
      <div className="ml-5">
        <Link href={"/"}>
          <Image src={logo} width={204} height={46.59} alt="logo" />
        </Link>
      </div>
      <div className="space-x-7 hidden lg:block">
        {menuItems.map((item) => {
          const isSelected = pathName === item.route
          return (
            <Link
              key={item.route}
              className={`${"text-disabled-text font-medium"}${
                isSelected &&
                "relative text-green-text after:block after:w-3 after:h-3 after:content-[` `] after:rounded-3xl after:bg-green-text-2 after:absolute after:bottom-[-15px] after:left-[40%]"
              }`}
              href={item.route}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
      <div className="mr-5 hidden lg:block">
        <button className="bg-green-text-2 w-[190px] h-[59px] text-lg">
          Contáctanos
        </button>
      </div>
      <div
        className="mr-5 space-y-1 lg:hidden cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="w-[30px] h-[5px] bg-green-text rounded-sm"></div>
        <div className="w-[30px] h-[5px] bg-green-text rounded-sm"></div>
        <div className="w-[30px] h-[5px] bg-green-text rounded-sm"></div>
      </div>
    </nav>
  )
}

export default Navbar
