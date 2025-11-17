import { useState } from 'react'
import Navbar from '../components/Navbar'
import { postJSON } from '../lib/api'

export default function FormPage() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      interest_category: form.get('category') || null,
      message: form.get('message')
    }
    try{
      await postJSON('/api/inquiries', payload)
      setStatus('Thank you! We will get back to you shortly.')
      e.currentTarget.reset()
    }catch(err){
      setStatus('Could not submit right now. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#5E4B2C]">
      <Navbar />
      <section className="pt-24 mx-auto max-w-xl px-4">
        <h1 className="text-3xl font-semibold mb-6">Enquiry Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" required placeholder="Full name" className="w-full rounded-md border border-[#E6DED0] px-4 py-2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-md border border-[#E6DED0] px-4 py-2" />
            <input name="phone" placeholder="Phone" className="w-full rounded-md border border-[#E6DED0] px-4 py-2" />
          </div>
          <select name="category" className="w-full rounded-md border border-[#E6DED0] px-4 py-2">
            <option value="">Interest Category</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
            <option value="land">Land</option>
          </select>
          <textarea name="message" required placeholder="Your message" rows="5" className="w-full rounded-md border border-[#E6DED0] px-4 py-2" />
          <button className="inline-flex items-center justify-center rounded-md bg-[#BFA27A] text-white px-5 py-2.5 shadow hover:brightness-95">Submit</button>
        </form>
        {status && <p className="mt-4 text-[#7A6A50]">{status}</p>}
      </section>
    </div>
  )
}
