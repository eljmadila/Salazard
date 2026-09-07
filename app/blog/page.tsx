"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      title: "The Art of Dry Aging: Why It Matters",
      excerpt: "Discover the meticulous process behind our signature dry-aged cuts and why time is the most important ingredient.",
      date: "Oct 15, 2023",
      author: "Chef Dubois",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1000&auto=format&fit=crop",
      category: "Culinary Techniques"
    },
    {
      title: "Seasonal Spotlight: Black Truffles",
      excerpt: "As winter approaches, we explore the earthy, intoxicating aroma of black truffles and how we incorporate them.",
      date: "Nov 02, 2023",
      author: "Sous Chef Maria",
      image: "https://images.unsplash.com/photo-1616781448660-f6556113b28b?q=80&w=1000&auto=format&fit=crop",
      category: "Ingredients"
    },
    {
      title: "Pairing Wine with Wild Game",
      excerpt: "Our sommelier shares insider tips on selecting the perfect vintage to complement the rich flavors of venison and boar.",
      date: "Nov 18, 2023",
      author: "Sommelier James",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop",
      category: "Wine & Spirits"
    }
  ];

  return (
    <div className="flex flex-col flex-1 bg-black pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary tracking-widest uppercase text-sm font-semibold">Insights & Stories</span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mt-4">The Salazard Journal</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group flex flex-col bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium uppercase tracking-wider">
                  <div className="flex items-center gap-1"><Calendar size={14} /> {post.date}</div>
                  <div className="flex items-center gap-1"><User size={14} /> {post.author}</div>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                
                <Link href="#" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-white transition-colors mt-auto">
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}