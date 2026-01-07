import React from 'react'

const Section3 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] gap-2">
      
      <div className="bg-[#1E1E1E] px-10 py-14 flex flex-col justify-center gap-6 rounded-2xl">
        
        <p className="uppercase text-white/60 text-sm tracking-widest">
          About
        </p>

        <h1 className="text-white text-4xl md:text-5xl font-light leading-tight">
          WHERE FASHION MEETS <br /> FREEDOM
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/70 text-sm leading-relaxed">
          <p>
            We believe that fashion should be an expression of individuality.
            We encourage creativity and originality in every item we offer,
            presenting customers with exclusive collections from independent designers.
          </p>

          <p>
            We strive to connect designers with fashion enthusiasts who appreciate
            the artistry and individuality behind each piece.
          </p>
        </div>

      </div>

      <div className="
        bg-[url('/girlWearingLongCoat.png')]
        bg-cover bg-center bg-no-repeat
        rounded-2xl
        min-h-75 md:min-h-full
      ">
      </div>

    </div>
  )
}

export default Section3
