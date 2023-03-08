import styles from "./styles.module.css"

const Footer = () => {
  const footer = "/images/footer.svg"

  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p>
          Te invitamos a que contribuyas con el desarrollo sostenible del
          Guaviare, uno de los departamentos con mayor riesgo de deforestación.
          Las comunidades campesinas estamos listas para defender nuestra
          Amazonía si nos apoyas en este camino. Contáctanos para conocer más
        </p>
        <div className={styles.content_form_container}>
          <form className={styles.content_form}>
            <input
              type="text"
              className={styles.form_text}
              placeholder="Tu correo"
            />
            <button className={styles.button}>Enviar</button>
          </form>
        </div>
        <img src={footer} />
      </div>
    </div>
  )
}

export default Footer
