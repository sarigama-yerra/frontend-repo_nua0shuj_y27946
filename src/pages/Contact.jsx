import Navbar from '../components/Navbar'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-[#5E4B2C]">
      <Navbar />
      <section className="pt-24 mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3"><MapPin className="text-[#BFA27A]"/><span>100 Beacon Street, Business Bay, Suite 1203</span></div>
            <div className="flex items-center gap-3"><Phone className="text-[#BFA27A]"/><span>+1 (555) 012-3456</span></div>
            <div className="flex items-center gap-3"><Mail className="text-[#BFA27A]"/><span>hello@aurumestates.com</span></div>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="p-2 rounded-full border border-[#E6DED0] hover:bg-[#F7F3EC]"><Facebook size={18}/></a>
              <a href="#" className="p-2 rounded-full border border-[#E6DED0] hover:bg-[#F7F3EC]"><Instagram size={18}/></a>
              <a href="#" className="p-2 rounded-full border border-[#E6DED0] hover:bg-[#F7F3EC]"><Linkedin size={18}/></a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#E6DED0]">
            <iframe title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=72.833%2C18.938%2C72.845%2C18.946&amp;layer=mapnik" className="w-full h-72" />
          </div>
        </div>
      </section>
    </div>
  )
}
