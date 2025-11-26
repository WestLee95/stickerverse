import React from 'react';
import { ArrowRight } from 'lucide-react';

const CollectionCard = ({ name, count }) => {
  return (
    <div className="aspect-4/3 bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
      {/* Visual Area with Scattered Circles */}
      <div className="h-[70%] bg-linear-to-br from-gray-50 to-gray-100 p-6 relative">
        {/* Large circle */}
        <div className="absolute top-4 left-6 w-20 h-20 bg-white rounded-full shadow-md rotate-6 transition-transform duration-300 group-hover:rotate-12"></div>
        
        {/* Medium circle 1 */}
        <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full shadow-md -rotate-3 transition-transform duration-300 group-hover:rotate-3"></div>
        
        {/* Medium circle 2 */}
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full shadow-md rotate-12 transition-transform duration-300 group-hover:rotate-18deg"></div>
        
        {/* Medium circle 3 */}
        <div className="absolute bottom-8 left-12 w-16 h-16 bg-white rounded-full shadow-md rotate-6 transition-transform duration-300 group-hover:rotate-12"></div>
        
        {/* Small circle 1 */}
        <div className="absolute top-1/3 right-6 w-12 h-12 bg-white rounded-full shadow-md -rotate-6 transition-transform duration-300 group-hover:-rotate-12"></div>
        
        {/* Small circle 2 */}
        <div className="absolute bottom-12 right-1/4 w-12 h-12 bg-white rounded-full shadow-md rotate-3 transition-transform duration-300 group-hover:rotate-9"></div>
      </div>
      
      {/* Content Area */}
      <div className="h-[30%] bg-white p-6 border-t border-gray-200 relative">
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
          {name}
        </h3>
        <p className="text-sm text-[#737373]">
          {count}
        </p>
        
        {/* Arrow Icon */}
        <ArrowRight className="absolute bottom-6 right-6 w-5 h-5 text-[#737373] transition-transform duration-300 group-hover:translate-x-2" />
      </div>
    </div>
  );
};

export default function Collections() {
  const collections = [
    { name: "Tech & Code", count: "24 designs" },
    { name: "Vintage Vibes", count: "18 designs" },
    { name: "Nature & Wildlife", count: "32 designs" },
    { name: "Pop Culture", count: "45 designs" },
    { name: "Minimalist", count: "21 designs" },
    { name: "Typography", count: "28 designs" }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header Area */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wider text-[#00D4FF] mb-3">
            COLLECTIONS
          </p>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Find Your Aesthetic
          </h2>
          
          <p className="text-lg md:text-xl text-[#e5e5e5]">
            Curated designs for every vibe, occasion, and obsession.
          </p>
        </div>
        
        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <CollectionCard 
              key={index}
              name={collection.name}
              count={collection.count}
            />
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border-2 border-white text-white bg-transparent rounded-full transition-all duration-300 hover:bg-[#00D4FF] hover:border-[#00D4FF] hover:text-[#1a1a1a]">
            Browse All Collections
          </button>
        </div>
      </div>
    </section>
  );
}