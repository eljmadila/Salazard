"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1170&auto=format&fit=crop" 
              alt="Chef plating a dish"
              className="object-cover w-full h-full"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border-2 border-primary/30 z-20 rounded-lg pointer-events-none"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary tracking-widest uppercase text-sm font-semibold">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight text-white">
              A Symphony of <br/> <span className="text-primary italic">Flavors</span> & Tradition
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              At Salazard, we believe that dining is not just about eating; it&apos;s an experience that engages all the senses. Founded by a passionate team of culinary artists, our mission is to elevate classic flavors using modern techniques and locally sourced ingredients.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every dish that leaves our kitchen tells a story of dedication, precision, and a profound love for gastronomy. Join us for a journey where every bite is a revelation.
            </p>
            
            <div className="mt-8">
              <img src="/signature.png" alt="Chef Signature" className="h-16 opacity-50 filter invert" onError={(e) => e.currentTarget.style.display = 'none'} />
              <p className="text-white font-heading text-xl mt-2">Executive Chef</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;