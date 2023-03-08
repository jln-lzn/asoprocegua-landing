import styles from './styles.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content_container}>
        <h1>Asoprocegua</h1>
        <h2>
          Nuestra misión es representar a los campesinos del Guaviare, consolidar cadenas productivas con valor agregado.
        </h2>
        <hr />
        <p>
          Desarrollar proyectos sostenibles con la conservación de los bosques y el medio ambiente, agropecuarios, frutales amazónicos, maderables y no maderables del bosque y de liderazgo comunitario, social, turístico y ambiental.
        </p>
      </div>
    </section>
  )
}

export default Hero