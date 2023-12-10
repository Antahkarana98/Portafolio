
const Contact = () => {
  return (
    <section>
      <h1>Contactame</h1>

      <div className="flex justify-center">
        <form className="">
          <div>
            <label className="block" htmlFor="name">Nombre</label>
            <input  type="text" id="name" name="name" />
          </div>

          <div>
            <label className="block" htmlFor="email">Email</label>
            <input className="" type="email" id="email" name="email" />
          </div>

          <div>
            <label className="block" htmlFor="message">Mensaje</label>
            <textarea className="" name="message" id="message" cols="30" rows="10"></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
