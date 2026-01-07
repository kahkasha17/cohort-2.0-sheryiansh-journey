const AdvCard = ({ title, text }) => {
  return (
    <div className="bg-[#1E1E1E] rounded-2xl p-6 flex flex-col justify-between">
      
      <div>
        <h3 className="text-white uppercase text-sm mb-3">
          {title}
        </h3>

        <p className="text-white/60 text-sm leading-relaxed">
          {text}
        </p>
      </div>

      <div className="flex justify-end mt-6">
        <button className="flex items-center gap-2 text-white/70 text-xs uppercase">
          Explore
          <span className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center">
            →
          </span>
        </button>
      </div>

    </div>
  )
}

export default AdvCard