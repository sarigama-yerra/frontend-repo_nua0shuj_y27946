import { motion } from 'framer-motion'
import { Home, Building2, Trees, Warehouse, MapPin } from 'lucide-react'

const amenityItems = [
  { icon: Home, label: 'Luxury Residences' },
  { icon: Building2, label: 'Prime Commercial' },
  { icon: Warehouse, label: 'Industrial Spaces' },
  { icon: Trees, label: 'Green Landscapes' },
  { icon: MapPin, label: 'Connected Locations' },
]

export default function Amenities() {
  return (
    <section className="py-16 bg-[#F7F3EC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#5E4B2C] mb-8">Amenities & Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {amenityItems.map(({icon:Icon,label}, idx) => (
            <motion.div key={idx} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: idx*0.05}} className="rounded-xl border border-[#E6DED0] bg-white p-4 text-center shadow-sm">
              <Icon className="mx-auto text-[#BFA27A]" />
              <p className="mt-2 text-sm text-[#5E4B2C]">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
