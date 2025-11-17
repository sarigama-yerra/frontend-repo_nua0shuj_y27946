import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero3D() {
  return (
    <section className="pt-24 bg-gradient-to-b from-white via-[#F7F3EC] to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <motion.h1 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-semibold text-[#5E4B2C]">
            Elevating Spaces with Timeless Elegance
          </motion.h1>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.2}} className="text-[#7A6A50]">
            Discover curated residences and commercial landmarks crafted with precision and a touch of luxury.
          </motion.p>
          <div className="flex gap-4">
            <a href="#featured" className="inline-flex items-center justify-center rounded-md bg-[#BFA27A] text-white px-5 py-2.5 shadow hover:brightness-95">Explore Featured</a>
            <a href="/form" className="inline-flex items-center justify-center rounded-md border border-[#D9CBB4] text-[#5E4B2C] px-5 py-2.5 hover:bg-[#F3ECE1]">Enquire Now</a>
          </div>
        </div>
        <div className="h-[420px] md:h-[520px] rounded-xl overflow-hidden border border-[#E6DED0] bg-white/60">
          {/* Replace with a Spline 3D scene URL; placeholder safe default */}
          <Spline scene="https://prod.spline.design/2v2b0gUq6jDPYy6Z/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}
