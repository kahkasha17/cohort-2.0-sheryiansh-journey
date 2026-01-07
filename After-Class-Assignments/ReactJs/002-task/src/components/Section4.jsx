import React from 'react'
import AdvCard from './AdvCard'

const Section4 = () => {
  return (
    <section className="bg-black px-6 md:px-12 py-20">
      
      {/* Heading */}
      <h2 className="text-white text-xl uppercase tracking-widest mb-10">
        Our Advantages
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[80vh]">

        {/* LEFT IMAGE */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/girlModel.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT TOP CARDS */}
        <div className="grid grid-rows-2 gap-6">

          <AdvCard
            title="Independent Designers"
            text="Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect creativity."
          />

          <AdvCard
            title="Exclusive & Uniquity"
            text="Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm."
          />

        </div>

        {/* LEFT BOTTOM CARDS */}
        <div className="grid grid-rows-2 gap-6">

          <AdvCard
            title="High Quality"
            text="Embrace superior craftsmanship with our meticulously curated garments, crafted with utmost attention to detail."
          />

          <AdvCard
            title="Eco-Friendly"
            text="Join our commitment to sustainability with eco-friendly fashion options and planet-conscious practices."
          />

        </div>

        {/* RIGHT IMAGE */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/mannequins.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default Section4
