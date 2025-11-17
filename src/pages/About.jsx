import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="bg-white min-h-screen text-[#5E4B2C]">
      <Navbar />
      <section className="pt-24 pb-12 bg-gradient-to-b from-white via-[#F7F3EC] to-white">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-4xl font-semibold">About Aurum Estates</h1>
          <p className="mt-4 text-[#7A6A50]">We craft enduring spaces that balance aesthetics and utility. Our philosophy blends sustainable design, timeless materials, and meticulous execution.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-[#E6DED0] bg-white">
              <img src={`https://images.unsplash.com/photo-15${i}692794403-34d4982bd8bf?q=80&w=1200&auto=format&fit=crop`} alt="project" className="h-56 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Flagship Project {i}</h3>
                <p className="text-[#7A6A50] text-sm">A showcase of our commitment to craft and detail.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 bg-[#FFFBF4] border-t border-b border-[#E6DED0]">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
          <ul className="space-y-2 text-[#7A6A50] list-disc pl-5">
            <li>Design-led development with human-centric planning</li>
            <li>Quality materials and sustainable practices</li>
            <li>Transparent communication and timely delivery</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
