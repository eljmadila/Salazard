"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import About from "@/components/About";
import { Star } from "lucide-react";

export default function Home() {
  const featuredMenu = [
    { name: "Truffle Risotto", description: "Wild mushrooms, aged parmesan, fresh black truffle", price: "$32" },
    { name: "Pan-Seared Scallops", description: "Cauliflower purée, crispy pancetta, caper beurre blanc", price: "$38" },
    { name: "Wagyu Ribeye", description: "A5 grade, confit garlic, charred asparagus, red wine jus", price: "$85" },
    { name: "Dark Chocolate Delice", description: "Gold leaf, raspberry coulis, hazelnut praline", price: "$18" }
  ];

  const testimonials = [
    { name: "Sarah Jenkins", text: "An absolute masterpiece of culinary art. The flavors were extraordinary.", rating: 5 },
    { name: "Michael Chang", text: "The perfect ambiance for our anniversary. The service was impeccable.", rating: 5 },
    { name: "Elena Rodriguez", text: "Every bite tells a story. One of the best dining experiences in the city.", rating: 5 }
  ];

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
            {featuredMenu.map((item, index) => (
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
            ))}
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-black border border-white/5 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center hover:border-primary/30 transition-colors"
              >
                <div className="flex text-primary mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-8 flex-grow">&quot;{test.text}&quot;</p>
                <h4 className="text-white font-heading font-semibold text-lg">{test.name}</h4>
              </motion.div>
            ))}
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
