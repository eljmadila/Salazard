"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import About from "@/components/About";
import { Star, Loader2 } from "lucide-react";
import axios from "axios";

export default function Home() {
  const [featuredMenu, setFeaturedMenu] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [testFormData, setTestFormData] = useState({ name: "", text: "", rating: 5 });
  const [testStatus, setTestStatus] = useState({ type: "", message: "" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 15000); // 15 seconds interval
    return () => clearInterval(interval);
  }, [testimonials]);

  const handleTestimonialSubmit = async (e: any) => {
    e.preventDefault();
    setTestStatus({ type: "loading", message: "Submitting..." });
    try {
      const res = await axios.post("http://localhost:8000/api/testimonial/", testFormData);
      if (res.status === 201 || res.status === 200) {
        setTestStatus({ type: "success", message: "Thank you for your feedback!" });
        setTestimonials([res.data, ...testimonials]);
        setTestFormData({ name: "", text: "", rating: 5 });
        // Clear success message after 5 seconds
        setTimeout(() => setTestStatus({ type: "", message: "" }), 5000);
      }
    } catch (err) {
      setTestStatus({ type: "error", message: "Failed to submit testimonial." });
    }
  };

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8000/api/menu/"),
      axios.get("http://localhost:8000/api/testimonial/")
    ])
      .then(([menuRes, testRes]) => {
        setFeaturedMenu(menuRes.data.filter((item: any) => item.category === "Featured"));
        setTestimonials(testRes.data);
      })
      .catch((err: any) => console.error("Error fetching data:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col flex-1 bg-black">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop" 
            alt="Restaurant Interior"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary tracking-[0.3em] uppercase text-sm font-semibold mb-6 block">Welcome to</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 drop-shadow-lg">
              SALAZARD
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-2xl">
              Where every dish tells a story crafted with passion, served with heart, and made for moments worth savoring.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link 
              href="/menu" 
              className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 font-semibold tracking-wider uppercase text-sm rounded-full"
            >
              Explore Menu
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-primary text-black hover:bg-white transition-all duration-300 font-semibold tracking-wider uppercase text-sm rounded-full"
            >
              Book a Table
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Featured Menu Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary tracking-widest uppercase text-sm font-semibold">Taste the Magic</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-4">Featured Delicacies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {loading ? (
              <div className="col-span-1 md:col-span-2 flex justify-center py-12">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
              </div>
            ) : (
              featuredMenu.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col border-b border-white/10 pb-6 group"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl font-heading font-semibold text-white group-hover:text-primary transition-colors">{item.name}</h3>
                    <span className="text-primary font-bold text-xl">{item.price}</span>
                  </div>
                  <p className="text-gray-400 font-light">{item.description}</p>
                </motion.div>
              ))
            )}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold">
              View Full Menu <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Guest Experiences</h2>
          </div>
          
          <div className="relative flex flex-col items-center">
            {loading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
              </div>
            ) : testimonials.length > 0 ? (
              <>
                <div className="relative w-full max-w-4xl h-[350px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-[#0a0a0a] border border-white/5 p-12 rounded-2xl shadow-2xl flex flex-col items-center text-center hover:border-primary/30 transition-colors"
                    >
                      <div className="flex text-primary mb-8">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} size={24} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-8 text-2xl leading-relaxed flex-grow font-light">&quot;{testimonials[currentIndex].text}&quot;</p>
                      <h4 className="text-white font-heading font-semibold text-xl text-primary">{testimonials[currentIndex].name}</h4>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Carousel Indicators */}
                <div className="flex gap-3 mt-10">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary scale-125' : 'bg-white/20 hover:bg-white/40'}`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-400">No testimonials yet.</p>
            )}
          </div>

          {/* Testimonial Form */}
          <div className="mt-20 max-w-2xl mx-auto bg-black p-8 rounded-2xl border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-heading font-bold text-white mb-6 text-center">Share Your Experience</h3>
            <form onSubmit={handleTestimonialSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  value={testFormData.name} 
                  onChange={(e) => setTestFormData({...testFormData, name: e.target.value})} 
                  required 
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      type="button" 
                      key={star} 
                      onClick={() => setTestFormData({...testFormData, rating: star})}
                      className={`p-1 transition-colors ${testFormData.rating >= star ? 'text-primary' : 'text-gray-600'}`}
                    >
                      <Star size={28} fill={testFormData.rating >= star ? 'currentColor' : 'none'} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Review</label>
                <textarea 
                  value={testFormData.text} 
                  onChange={(e) => setTestFormData({...testFormData, text: e.target.value})} 
                  required 
                  rows={4} 
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                  placeholder="Tell us about your experience..."
                ></textarea>
              </div>

              {testStatus.message && (
                <div className={`p-4 rounded-md ${testStatus.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : testStatus.type === 'error' ? 'bg-red-500/20 text-red-400 border border-red-500/50' : 'bg-primary/20 text-primary border border-primary/50'}`}>
                  {testStatus.message}
                </div>
              )}

              <button 
                type="submit" 
                disabled={testStatus.type === 'loading'} 
                className="w-full bg-primary text-black font-bold py-4 rounded-md hover:bg-white transition-colors uppercase tracking-wider disabled:opacity-50"
              >
                {testStatus.type === 'loading' ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop" 
            alt="Dining Table"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Reserve Your Table</h2>
          <p className="text-xl text-gray-300 mb-10 font-light">Join us for an unforgettable evening. Reservations are highly recommended.</p>
          <Link 
            href="/contact" 
            className="px-10 py-5 bg-primary text-black hover:bg-white transition-all duration-300 font-bold tracking-wider uppercase text-sm rounded-full inline-block shadow-[0_0_20px_rgba(180,120,40,0.4)]"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
