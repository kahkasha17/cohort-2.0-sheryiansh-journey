import React from 'react'

const Card = ({ data }) => {

  const {
    name,
    role,
    bio,
    avatar,
    coverImage,
    stats,
    social
  } = data

  return (
    <div className="card p-2 w-full bg-[#FCFCFC] rounded-2xl md:w-fit lg:w-fit shadow-md">

      {/* Cover */}
      <div className="profile-img p-2 mb-15 relative">
        <div className="cover-img rounded-2xl h-[30vh] w-full overflow-hidden">
          <img
            src={coverImage}
            alt="cover"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Avatar */}
        <div
          className="
            avatar-img absolute h-24 w-24 rounded-full
            top-[26vh] left-1/2 -translate-x-1/2
            border-2 border-t-amber-900 border-e-amber-200
            border-l-blue-600 border-b-transparent
            p-[0.2rem] bg-white
            overflow-hidden shadow-md
          "
        >
          <img
            src={avatar}
            alt={name}
            className="h-full w-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Profile Content */}
      <div className="profile-content flex flex-col items-center gap-1 px-4 mt-4">
        <h1 className="font-bold text-xl">{name}</h1>
        <p className="text-sm text-gray-400">{role}</p>
        <p className="text-center font-light text-sm text-gray-500">
          {bio}
        </p>
      </div>

      {/* Stats */}
      <div className="profile-count flex items-center justify-around p-4 rounded-2xl m-3 bg-[#F5F5F5]">
        <div className="text-center">
          <h1 className="font-semibold">{stats.likes}</h1>
          <p className="text-xs text-gray-500">Likes</p>
        </div>
        <div className="text-center">
          <h1 className="font-semibold">{stats.posts}</h1>
          <p className="text-xs text-gray-500">Posts</p>
        </div>
        <div className="text-center">
          <h1 className="font-semibold">{stats.views}</h1>
          <p className="text-xs text-gray-500">Views</p>
        </div>
      </div>

    
      <div className="social-media flex justify-center gap-5 pb-4 text-lg text-gray-600">
        <a href={social.instagram} target="_blank">
          <i className="ri-instagram-line hover:text-pink-500"></i>
        </a>
        <a href={social.twitter} target="_blank">
          <i className="ri-twitter-x-line hover:text-black"></i>
        </a>
        <a href={social.website} target="_blank">
          <i className="ri-threads-line hover:text-gray-800"></i>
        </a>
      </div>

    </div>
  )
}

export default Card
