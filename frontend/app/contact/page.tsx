"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    date: "",
    time: "",
    number_of_people: "2",
    special_request: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Submitting reservation..." });
    try {
      const res = await axios.post("http://localhost:8000/api/reservation/", formData);
      if (res.status === 201 || res.status === 200) {
        setStatus({ type: "success", message: "Reservation successful! We will contact you shortly." });
        setFormData({ fullname: "", email: "", date: "", time: "", number_of_people: "2", special_request: "" });
      } else {
        setStatus({ type: "error", message: "Failed to submit reservation. Please check your details." });
      }
    } catch (err: any) {
      setStatus({ type: "error", message: "An error occurred. Please try again." });
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-black pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary tracking-widest uppercase text-sm font-semibold">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mt-4">Contact Us & Reservations</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0a0a0a] p-8 md:p-12 rounded-xl border border-white/5 shadow-2xl"
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-8">Make a Reservation</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Date</label>
                  <input type="date" name="date" min={today} value={formData.date} onChange={handleChange} required className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Time</label>
                  <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Number of Guests</label>
                <select name="number_of_people" value={formData.number_of_people} onChange={handleChange} className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                  <option value="large">Larger Party (Contact Us)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Special Requests (Optional)</label>
                <textarea name="special_request" value={formData.special_request} onChange={handleChange} rows={4} className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Allergies, anniversaries, etc."></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-md ${status.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : status.type === 'error' ? 'bg-red-500/20 text-red-400 border border-red-500/50' : 'bg-primary/20 text-primary border border-primary/50'}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" disabled={status.type === 'loading'} className="w-full bg-primary text-black font-bold py-4 rounded-md hover:bg-white transition-colors uppercase tracking-wider disabled:opacity-50">
                {status.type === 'loading' ? 'Submitting...' : 'Request Reservation'}
              </button>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-12"
          >
            <div>
              <h2 className="text-3xl font-heading font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-400">123 Culinary Avenue, Food District<br/>Kinshasa, CO 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-400">+243 000 888 111</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-400">hello@salazard.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Opening Hours</h3>
                    <p className="text-gray-400">Mon - Sat: 5:00 PM - 11:00 PM<br/>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="flex-1 min-h-[300px] rounded-xl overflow-hidden border border-white/5 relative group bg-[#0a0a0a]">
              <iframe 
                src="https://maps.google.com/maps?q=Gombe,%20Kinshasa&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                className="absolute inset-0 w-full h-full opacity-70 hover:opacity-100 transition-all duration-500 invert hue-rotate-180 contrast-125"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}