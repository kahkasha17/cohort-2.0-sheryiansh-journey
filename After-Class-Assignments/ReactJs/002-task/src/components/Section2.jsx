const Section2 = () => {
  return (
    <div className="py-2 px-2 h-screen md:h-fit ">
      
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">

      <div className="flex flex-col gap-2 px-4 py-4  items-center">
        <p className="uppercase font-bold text-[#1E1E1E]!">designers</p>
        <h1 className="uppercase font-light text-5xl"> 150+</h1>
         
      </div>
      <div className="flex flex-col gap-2 px-4 py-4  items-center">
        <p className="uppercase font-bold text-[#1E1E1E]!">clients</p>
        <h1 className="uppercase font-light text-5xl"> 500+</h1>
         
      </div>
      <div className="flex flex-col gap-2 px-4 py-4  items-center">
        <p className="uppercase font-bold text-[#1E1E1E]!">masterpieces</p>
        <h1 className="uppercase font-light text-5xl"> 20k+</h1>
         
      </div>
      <div className="flex flex-col gap-2 px-4 py-4 items-center">
        <p className="uppercase font-bold text-[#1E1E1E]!">events</p>
        <h1 className="uppercase font-light text-5xl"> 50+</h1>
         
      </div>
   
      </div>

    </div>
  )
}

export default Section2
