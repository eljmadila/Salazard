"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 bg-black pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary tracking-widest uppercase text-sm font-semibold">Our Heritage</span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mt-4">About Salazard</h1>
        </motion.div>
      </div>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-6">Our Philosophy</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Founded in 2010, Salazard began with a simple vision: to create a dining destination where uncompromising quality meets warm, intuitive hospitality. 
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We source our ingredients from local purveyors and sustainable farms, ensuring that every dish not only tastes exceptional but also respects our environment and community. Our culinary team is dedicated to preserving classic techniques while embracing modern innovation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 h-[500px] relative rounded-xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1074&auto=format&fit=crop" 
              alt="Restaurant Interior"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Chef */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[600px] relative rounded-xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1284&auto=format&fit=crop" 
                alt="Executive Chef"
                className="object-cover w-full h-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary tracking-widest uppercase text-sm font-semibold">The Mastermind</span>
              <h2 className="text-4xl font-heading font-bold text-white mt-4 mb-6">Chef Alexandre Dubois</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                With over two decades of experience in Michelin-starred kitchens across Paris, Tokyo, and New York, Chef Dubois brings a wealth of knowledge and an unyielding passion for perfection to Salazard.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                &quot;My goal is to evoke emotion through food. I want our guests to experience a sense of wonder with every course.&quot;
              </p>
              <img src="/signature.png" alt="Chef Signature" className="h-16 filter invert opacity-50" onError={(e) => e.currentTarget.style.display = 'none'} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}