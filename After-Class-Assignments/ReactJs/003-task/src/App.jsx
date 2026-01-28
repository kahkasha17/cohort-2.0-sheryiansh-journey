import React from 'react'
import Card from './components/card'

const App = () => {

const profiles = [
  {
    id: 1,
    name: "Noah Thompson",
    role: "Product Designer",
    bio: "Designing intuitive products with a focus on usability.",
    avatar: "https://i.pravatar.cc/150?img=12",
    coverImage: "https://picsum.photos/600/300?random=11",
    experienceLevel: "senior",
    skillsLevel: 88,
    stats: { likes: "72.9K", posts: 828, views: "342.9K" },
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    isFollowed: false,
  },
  {
    id: 2,
    name: "Emma Wilson",
    role: "UI/UX Designer",
    bio: "Crafting clean and meaningful digital experiences.",
    avatar: "https://i.pravatar.cc/150?img=32",
    coverImage: "https://picsum.photos/600/300?random=12",
    experienceLevel: "mid",
    skillsLevel: 82,
    stats: { likes: "54.2K", posts: 412, views: "198.4K" },
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    isFollowed: true,
  },
  {
    id: 3,
    name: "Liam Anderson",
    role: "Frontend Developer",
    bio: "Building fast and responsive web applications.",
    avatar: "https://i.pravatar.cc/150?img=45",
    coverImage: "https://picsum.photos/600/300?random=13",
    experienceLevel: "senior",
    skillsLevel: 90,
    stats: { likes: "88.1K", posts: 1024, views: "401.7K" },
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    isFollowed: false,
  },
  {
    id: 4,
    name: "Olivia Martinez",
    role: "Graphic Designer",
    bio: "Visual storytelling through modern graphic design.",
    avatar: "https://i.pravatar.cc/150?img=48",
    coverImage: "https://picsum.photos/600/300?random=14",
    experienceLevel: "mid",
    skillsLevel: 76,
    stats: { likes: "41.7K", posts: 389, views: "176.2K" },
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    isFollowed: true,
  },
  {
    id: 5,
    name: "Ethan Brown",
    role: "Full Stack Developer",
    bio: "Developing scalable applications using MERN stack.",
    avatar: "https://i.pravatar.cc/150?img=59",
    coverImage: "https://picsum.photos/600/300?random=15",
    experienceLevel: "senior",
    skillsLevel: 92,
    stats: { likes: "96.4K", posts: 1340, views: "512.6K" },
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    isFollowed: false,
  },
  {
    id: 6,
    name: "Sophia Lee",
    role: "Content Strategist",
    bio: "Creating content that connects brands with people.",
    avatar: "https://i.pravatar.cc/150?img=47",
    coverImage: "https://picsum.photos/600/300?random=16",
    experienceLevel: "mid",
    skillsLevel: 78,
    stats: { likes: "37.9K", posts: 267, views: "143.8K" },
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    isFollowed: true,
  },
  {
    id: 7,
    name: "Daniel Kim",
    role: "Product Manager",
    bio: "Aligning business goals with user needs.",
    avatar: "https://i.pravatar.cc/150?img=64",
    coverImage: "https://picsum.photos/600/300?random=17",
    experienceLevel: "senior",
    skillsLevel: 86,
    stats: { likes: "68.2K", posts: 541, views: "289.4K" },
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    isFollowed: false,
  },
  {
    id: 8,
    name: "Ava Johnson",
    role: "Marketing Specialist",
    bio: "Driving growth through data-driven marketing.",
    avatar: "https://i.pravatar.cc/150?img=29",
    coverImage: "https://picsum.photos/600/300?random=18",
    experienceLevel: "mid",
    skillsLevel: 80,
    stats: { likes: "49.6K", posts: 403, views: "214.7K" },
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    isFollowed: true,
  },
  {
    id: 9,
    name: "William Turner",
    role: "Data Analyst",
    bio: "Turning complex data into actionable insights.",
    avatar: "https://i.pravatar.cc/150?img=15",
    coverImage: "https://picsum.photos/600/300?random=19",
    experienceLevel: "senior",
    skillsLevel: 87,
    stats: { likes: "58.1K", posts: 612, views: "267.9K" },
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    isFollowed: false,
  },
  {
    id: 10,
    name: "Mia Roberts",
    role: "Mobile App Developer",
    bio: "Building smooth and scalable mobile apps.",
    avatar: "https://i.pravatar.cc/150?img=5",
    coverImage: "https://picsum.photos/600/300?random=20",
    experienceLevel: "mid",
    skillsLevel: 83,
    stats: { likes: "45.3K", posts: 356, views: "192.5K" },
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    isFollowed: true,
  },
];



  return (
    <div className='p-2 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4  place-items-center bg-[#F5F5F5]'>

    {profiles.map(
      (elem)=>{

        return         <Card key={elem.id} data={elem} />


      }
    )}

      
    </div>
  )
}

export default App