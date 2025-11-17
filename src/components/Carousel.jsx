import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function Carousel({ items = [] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 })
  }, [inView, controls])

  return (
    <section id="featured" ref={ref} className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#5E4B2C] mb-6">Featured Properties</h2>
        <motion.div initial={{opacity:0, y:20}} animate={controls} transition={{duration:0.6}} className="overflow-x-auto no-scrollbar">
          <div className="flex gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="min-w-[280px] md:min-w-[360px] bg-white rounded-xl border border-[#E6DED0] overflow-hidden shadow-sm">
                <img src={item.images?.[0] || 'https://images.unsplash.com/photo-1505692794403-34d4982bd8bf?q=80&w=1200&auto=format&fit=crop'} alt={item.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-[#5E4B2C]">{item.title}</h3>
                  <p className="text-sm text-[#7A6A50] line-clamp-2">{item.location}</p>
                  <div className="mt-3 text-sm text-[#5E4B2C]">{item.price ? `$${item.price.toLocaleString()}` : 'Price on request'}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
