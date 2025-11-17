import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { fetchJSON } from '../lib/api'

const tabs = [
  { key: 'residential', label: 'Residential' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'industrial', label: 'Industrial' },
  { key: 'land', label: 'Land Plots' },
]

export default function Projects() {
  const [active, setActive] = useState('residential')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchJSON(`/api/properties?category=${active}`)
      .then(setItems)
      .catch(() => setItems([
        { title: 'Sample '+active, location: 'Prime District', price: 500000, images: [] },
        { title: 'Vista '+active, location: 'City Fringe', price: undefined, images: [] },
      ]))
  }, [active])

  return (
    <div className="min-h-screen bg-white text-[#5E4B2C]">
      <Navbar />
      <section className="pt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold mb-6">Projects</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map(t => (
            <button key={t.key} onClick={() => setActive(t.key)} className={`px-4 py-2 rounded-full border ${active===t.key? 'bg-[#BFA27A] text-white border-[#BFA27A]' : 'border-[#E6DED0] text-[#5E4B2C] hover:bg-[#F7F3EC]'}`}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden border border-[#E6DED0] bg-white shadow-sm">
              <img src={p.images?.[0] || 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop'} alt={p.title} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-[#7A6A50]">{p.location}</p>
                <div className="mt-2 text-sm">{p.price ? `$${p.price.toLocaleString()}` : 'Price on request'}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
