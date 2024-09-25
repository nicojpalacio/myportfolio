'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
        console.log('Sending data:', formData);
        const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const result = await response.json(); // Añade esta línea
    console.log('Response:', result);
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
    setIsSubmitting(false)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      id="contact"
      className="flex items-center justify-center bg-[#121212] mt-10 mb-5 w-full"
    >
      
      <div className=" w-full max-w-4xl p-8 space-y-8 bg-opacity-50 backdrop-filter border border-3xl border-purple backdrop-blur-lg rounded-2xl shadow-2xl">
        <h2 className="text-3xl text-center font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="md:flex md:space-x-6">
            <div className="md:w-1/2 space-y-6">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full px-3 py-2 bg-transparent border-b border-purple-500 text-white placeholder-white focus:placeholder-purple focus:border-purple focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full px-3 py-2 bg-transparent border-b border-purple-500 text-white placeholder-white focus:placeholder-purple focus:border-purple focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-3 py-2 bg-transparent border-b border-purple-500 text-white placeholder-white focus:placeholder-purple focus:border-purple focus:outline-none"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full px-3 py-2 bg-transparent border-b border-purple-500 text-white placeholder-white focus:placeholder-purple focus:border-purple focus:outline-none resize-none md:h-full"
                rows={3}
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 text-white bg-pink-700 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition-all duration-300 hover:scale-105 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        {submitStatus === 'success' && (
          <p className="text-green-400 text-center">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
        )}
      </div>
      
    </motion.div>
  )
}

