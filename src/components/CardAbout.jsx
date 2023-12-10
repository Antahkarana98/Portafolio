

const CardAbout = ({logo, title, description, company, date}) => {
  return (
    <>
      <article className="glass pb-5">
        <div className="flex justify-center bg-white rounded-t-2xl py-20 resize-card h-3/6">
          <img src={logo} alt="logo-company" />
        </div>

        <div className="px-5 text-white font-bold text-lg h-2/6">
          <h3 className="text-quaternary text-2xl flex items-center my-3">{title}</h3>
          <p className="h-2/4">{description}</p>
        </div>
        <div className="px-5 text-white flex items-end font-bold text-lg h-1/6">
          <p className="border-r pe-3 text-secondary text-2xl">{company}</p>
          <p className="ps-3 opacity-80">{date}</p>
        </div>

      </article>
    </>
  )
}

export default CardAbout
