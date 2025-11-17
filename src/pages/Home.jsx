import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero3D from '../components/Hero3D'
import Carousel from '../components/Carousel'
import Amenities from '../components/Amenities'
import Reviews from '../components/Reviews'
import { fetchJSON } from '../lib/api'

export default function Home() {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    fetchJSON('/api/properties?featured=true')
      .then(setFeatured)
      .catch(() => setFeatured([
        { title: 'Aurum Heights', location: 'Downtown', price: 850000, images: [] },
        { title: 'Ivory Residences', location: 'Riverside', price: 620000, images: [] },
        { title: 'Opus Commercial', location: 'Business Bay', price: undefined, images: [] },
      ]))
  }, [])

  return (
    <div className="bg-white text-[#5E4B2C]">
      <Navbar />
      <Hero3D />
      <Carousel items={featured} />
      <Amenities />
      <Reviews />
      <footer className="bg-[#F7F3EC] border-t border-[#E6DED0] py-10 text-center text-sm text-[#7A6A50]">© {new Date().getFullYear()} Aurum Estates. All rights reserved.</footer>
    </div>
  )
}
