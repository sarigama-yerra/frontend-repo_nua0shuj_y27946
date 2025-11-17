import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchJSON } from '../lib/api'

export default function Reviews() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetchJSON('/api/reviews').then(setReviews).catch(() => setReviews([{
      name: 'Sophia', rating: 5, comment: 'Seamless experience and impeccable finish.'
    },{
      name: 'Liam', rating: 5, comment: 'Prime locations and thoughtful layouts.'
    }]))
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#5E4B2C] mb-6">What our clients say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, idx) => (
            <motion.div key={idx} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="rounded-xl border border-[#E6DED0] bg-[#FFFBF4] p-6">
              <div className="text-[#5E4B2C] font-semibold">{r.name}</div>
              <div className="text-[#BFA27A]">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
              <p className="text-[#7A6A50] mt-2">{r.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
