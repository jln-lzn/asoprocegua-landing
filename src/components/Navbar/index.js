import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./styles.module.css"

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

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_container}>
        <Link href={"/"}>
          <Image alt="Asoprocegua" src={logo} width={200} height={46} />
        </Link>
      </div>
      <div className={styles.menu_container}>
        {menuItems.map((item) => {
          const isSelected = pathName === item.route
          return (
            <Link
              key={item.route}
              className={`${styles.menu_item} ${isSelected && styles.selected}`}
              href={item.route}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
      <div className={styles.actions_container}>
        <button className={styles.main_action}>Contáctanos</button>
      </div>
      <div className={styles.mobile_container}>
        <div className={styles.mobile_icon}></div>
        <div className={styles.mobile_icon}></div>
        <div className={styles.mobile_icon}></div>
      </div>
    </nav>
  )
}

export default Navbar
