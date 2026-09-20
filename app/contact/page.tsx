"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Date</label>
                  <input type="date" className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Time</label>
                  <input type="time" className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Number of Guests</label>
                <select className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                  <option value="large">Larger Party (Contact Us)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Special Requests (Optional)</label>
                <textarea rows={4} className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Allergies, anniversaries, etc."></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-black font-bold py-4 rounded-md hover:bg-white transition-colors uppercase tracking-wider">
                Request Reservation
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
                    <p className="text-gray-400">123 Culinary Avenue, Food District<br/>New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
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
                    <p className="text-gray-400">Tue - Sun: 5:00 PM - 11:00 PM<br/>Mon: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex-1 min-h-[300px] rounded-xl overflow-hidden border border-white/5 relative group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1174&auto=format&fit=crop" 
                alt="Map View"
                className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="bg-black/80 px-6 py-2 rounded-full text-primary border border-primary/30 font-semibold tracking-wider text-sm">
                  View on Google Maps
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}