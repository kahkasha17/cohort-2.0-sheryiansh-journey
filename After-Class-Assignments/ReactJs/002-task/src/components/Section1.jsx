const Section1 = () => {
  return (
    <div className="py-4 px-5  md:h-[45vh] ">
      
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">

      <div className="bg-[#1E1E1E] border-transparent rounded-2xl p-4 flex flex-col gap-3 px-4 py-4 md:justify-center">
        <h1 className="uppercase font-bold"> independency</h1>
        <p className="capitalize font-light">Explore the creativity of independent designers from around the globe.</p>
         <div className="learnmore flex gap-4">
          <i className="ri-arrow-right-up-long-line px-2 py-1 border border-white rounded-full bg-[#353131] font-extrabold text-white"></i>

          <button className="uppercase text-sm font-bold">Learn more </button>
        </div>
      </div>
      <div className="bg-[#1E1E1E] border-transparent rounded-2xl p-4 flex flex-col gap-3 px-4 py-4  md:justify-center">
        <h1 className="uppercase font-bold"> UNIQUITY</h1>
        <p className="capitalize font-light">Discover the charm of unique pieces that stand out effortlessly.</p>
         <div className="learnmore flex gap-4">
          <i className="ri-arrow-right-up-long-line px-2 py-1 border border-white rounded-full bg-[#353131] font-extrabold text-white"></i>

          <button className="uppercase text-sm font-bold">Learn more </button>
        </div>
      </div>
      <div className="bg-[#1E1E1E] border-transparent rounded-2xl p-4 flex flex-col gap-3 px-4 py-4 md:justify-center">
        <h1 className="uppercase font-bold"> QUALITY</h1>
        <p className="capitalize font-light">Experience unparalleled craftsmanship and attention to detail.</p>
         <div className="learnmore flex gap-4">
          <i className="ri-arrow-right-up-long-line px-2 py-1 border border-white rounded-full bg-[#353131] font-extrabold text-white"></i>

          <button className="uppercase text-sm font-bold">Learn more </button>
        </div>
      </div>
      <div className="bg-[#1E1E1E] border-transparent rounded-2xl p-4 flex flex-col gap-3 px-4 py-4 md:justify-center">
        <h1 className="uppercase font-bold"> SUSTAINABILITY</h1>
        <p className="capitalize font-light">Embrace eco-conscious fashion choices without compromising on style.</p>
         <div className="learnmore flex gap-4">
          <i className="ri-arrow-right-up-long-line px-2 py-1 border border-white rounded-full bg-[#353131] font-extrabold text-white"></i>

          <button className="uppercase text-sm font-bold">Learn more </button>
        </div>
      </div>
   
      </div>

    </div>
  )
}

export default Section1
