"use client";
import { motion } from "framer-motion";

export default function MenuPage() {
  const menuCategories = [
    {
      title: "Starters",
      items: [
        { name: "Oysters on the Half Shell", description: "Mignonette, lemon, freshly grated horseradish", price: "$24" },
        { name: "Wagyu Beef Carpaccio", description: "Truffle aioli, shaved parmesan, crispy capers", price: "$28" },
        { name: "Burrata & Heirloom Tomato", description: "Basil oil, aged balsamic, micro greens", price: "$22" },
      ]
    },
    {
      title: "Main Courses",
      items: [
        { name: "Pan-Seared Halibut", description: "Saffron risotto, charred asparagus, lemon beurre blanc", price: "$42" },
        { name: "Dry-Aged Bone-In Ribeye", description: "Pommes purée, roasted wild mushrooms, bordelaise", price: "$75" },
        { name: "Duck Magret", description: "Parsnip purée, cherry gastrique, seasonal vegetables", price: "$48" },
        { name: "Hand-Rolled Pappardelle", description: "Wild boar ragout, pecorino romano, fresh herbs", price: "$36" },
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Valrhona Chocolate Tart", description: "Salted caramel, espresso gelato, gold leaf", price: "$16" },
        { name: "Vanilla Bean Panna Cotta", description: "Mixed berry compote, almond tuile", price: "$14" },
        { name: "Lemon Meringue Mille-Feuille", description: "Torched meringue, yuzu curd, puff pastry", price: "$15" },
      ]
    }
  ];

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

        <div className="space-y-24">
          {menuCategories.map((category, catIndex) => (
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
                {category.items.map((item, itemIndex) => (
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
      </div>
    </div>
  );
}