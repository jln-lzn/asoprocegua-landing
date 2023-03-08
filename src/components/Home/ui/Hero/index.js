import Image from "next/image"
import styles from "./styles.module.css"

const Hero = () => {
  const guepardo = "/images/guepardo.svg"
  const small_plant = "/images/small plant left.svg"
  const big_plant = "/images/big plant left.svg"

  return (
    <section className={styles.hero}>
      <div className={styles.content_container}>
        <h2>
          Nuestra misión es representar a los campesinos del Guaviare,
          consolidar cadenas productivas con valor agregado.
        </h2>
        <hr />
        <p>
          Desarrollar proyectos sostenibles con la conservación de los bosques y
          el medio ambiente, agropecuarios, frutales amazónicos, maderables y no
          maderables del bosque y de liderazgo comunitario, social, turístico y
          ambiental.
        </p>
        <button>Contáctanos</button>
        <div className={styles.images_container}>
          <Image
            className={styles.big_plant}
            src={big_plant}
            width={423.06}
            height={162.47}
            alt="big-plant"
          />
          <Image
            className={styles.small_plant}
            src={small_plant}
            width={240.6}
            height={93.48}
            alt="small-plant"
          />
          <Image src={guepardo} width={190.1} height={321.88} alt="guepardo" />
        </div>
      </div>
    </section>
  )
}

export default Hero
