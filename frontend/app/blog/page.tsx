"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/blog/")
      .then((res: any) => setPosts(res.data))
      .catch((err: any) => console.error("Error fetching blog posts:", err))
      .finally(() => setLoading(false));
  }, []);

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

        {loading ? (
          <div className="flex justify-center py-32">
            <Loader2 className="w-16 h-16 text-primary animate-spin" />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}