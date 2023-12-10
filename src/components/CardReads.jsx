const CardReads = ({ CompanyAndDate, position, tasks,  img }) => {

  return (
    <>
    <article className="flex w-2/4 text-slate-500 hover-card-reads p-8 rounded-xl text-xl">
      <div className="w-1/2 grid grid-cols-3 gap-3 items-center">
        {img && img.map((item, index) => (
          <div key={index} className="rounded-xl">
            <img src={item} alt="" className='w-2/3 m-auto'/>
          </div>
        ))}
      </div>

      <div className="w-1/2 flex items-center border-l-2 border-slate-200 pl-5">
        <div className="">
          <header>
            <h3 className="text-slate-200 mb-1 text-2xl">{ CompanyAndDate}</h3>
          </header>
          <div>
            <p className="mb-1">{ position }</p>
            <p className=" leading-normal text-slate-300 mb-2">{ tasks }</p>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}

export default CardReads
