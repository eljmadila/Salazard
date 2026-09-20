"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { Loader2 } from "lucide-react";
import axios from "axios";

export default function MenuPage() {
  const [menuCategories, setMenuCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/menu/")
      .then((res: any) => {
        const categoriesMap: any = {};
        res.data.forEach((item: any) => {
          if (!categoriesMap[item.category]) {
            categoriesMap[item.category] = { title: item.category, items: [] };
          }
          categoriesMap[item.category].items.push(item);
        });
        
        // Convert map to array and filter out 'Featured' category which is on the homepage
        const grouped = Object.values(categoriesMap).filter((cat: any) => cat.title !== 'Featured');
        setMenuCategories(grouped);
      })
      .catch((err: any) => console.error("Error fetching menu:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col flex-1 bg-black pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary tracking-widest uppercase text-sm font-semibold">Culinary Excellence</span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mt-4">Our Menu</h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Carefully curated dishes showcasing the finest seasonal ingredients and exceptional culinary techniques.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-32">
            <Loader2 className="w-16 h-16 text-primary animate-spin" />
          </div>
        ) : (
          <div className="space-y-24">
            {menuCategories.map((category) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-heading font-bold text-primary mb-10 pb-4 border-b border-white/10 text-center">
                  {category.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                  {category.items.map((item: any) => (
                    <div key={item.name} className="flex flex-col group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-heading font-semibold text-white group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex-1 border-b border-dashed border-white/20 mx-4 opacity-50"></div>
                        <span className="text-primary font-bold text-xl">{item.price}</span>
                      </div>
                      <p className="text-gray-400 font-light text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}