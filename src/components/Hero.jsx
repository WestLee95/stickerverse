import React, { useState, useEffect } from 'react';
import { Truck, Award, Shield, ShoppingCart, Menu, X, Star } from 'lucide-react';
import Bible from '../assets/stickers/Bible.jpg';
import Chosen from '../assets/stickers/Chosen.jpg';
import Moses from '../assets/stickers/Moses.jpg';
import Ask from '../assets/stickers/Ask Trust Thank.jpg';
import Bonfire from '../assets/stickers/bonfire.jpg';
import Mercedes from '../assets/stickers/Mercedes f1.jpg';
import Bottle from '../assets/stickers/water bottle.jpg';
import Cat from '../assets/stickers/cat teaching.jpg';

const StickerverseHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Replace these placeholder URLs with your actual sticker image URLs
  const stickers = [
    { size: 'w-40 h-40', top: '10%', left: '10%', speed: 0.1, rotation: '-rotate-12', image: Bible },
    { size: 'w-30 h-30', top: '15%', left: '55%', speed: 0.15, rotation: 'rotate-6', image: Chosen },
    { size: 'w-36 h-36', top: '35%', left: '25%', speed: 0.12, rotation: 'rotate-12', image: Moses },
    { size: 'w-32 h-32', top: '40%', left: '65%', speed: 0.18, rotation: '-rotate-6', image: Ask },
    { size: 'w-28 h-28', top: '60%', left: '15%', speed: 0.08, rotation: 'rotate-3', image: Bonfire },
    { size: 'w-36 h-36', top: '65%', left: '50%', speed: 0.14, rotation: '-rotate-9', image: Mercedes },
    { size: 'w-25 h-25', top: '80%', left: '35%', speed: 0.11, rotation: 'rotate-15', image: Bottle },
    { size: 'w-32 h-32', top: '75%', left: '70%', speed: 0.16, rotation: '-rotate-3', image: Cat },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <style>{`
          @keyframes floatUp {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.3; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
          }
          .float-shape {
            position: absolute;
            background: #2a2a2a;
            animation: floatUp 25s infinite;
          }
          .float-shape:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 28s; }
          .float-shape:nth-child(2) { left: 25%; animation-delay: 5s; animation-duration: 22s; }
          .float-shape:nth-child(3) { left: 45%; animation-delay: 10s; animation-duration: 30s; }
          .float-shape:nth-child(4) { left: 60%; animation-delay: 3s; animation-duration: 26s; }
          .float-shape:nth-child(5) { left: 75%; animation-delay: 8s; animation-duration: 24s; }
          .float-shape:nth-child(6) { left: 85%; animation-delay: 12s; animation-duration: 27s; }
        `}</style>
        <div className="float-shape w-4 h-4 rounded-full" />
        <div className="float-shape w-3 h-3 rounded-sm" />
        <div className="float-shape w-5 h-5 rounded-full" />
        <div className="float-shape w-3 h-3 rounded-full" />
        <div className="float-shape w-4 h-4 rounded-sm" />
        <div className="float-shape w-3 h-3 rounded-full" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-[#1a1a1a]/95 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="text-white font-bold text-2xl tracking-tight">STICKERVERSE</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#shop" className="text-white text-sm uppercase tracking-wider hover:text-[#00D4FF] transition-colors duration-300">Shop</a>
            <a href="#custom" className="text-white text-sm uppercase tracking-wider hover:text-[#00D4FF] transition-colors duration-300">Custom Orders</a>
            <a href="#about" className="text-white text-sm uppercase tracking-wider hover:text-[#00D4FF] transition-colors duration-300">About</a>
            <button aria-label="Shopping cart" className="text-white hover:text-[#00D4FF] transition-colors duration-300">
              <ShoppingCart size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-[#2a2a2a]">
            <div className="px-6 py-4 space-y-4">
              <a href="#shop" className="block text-white text-sm uppercase tracking-wider">Shop</a>
              <a href="#custom" className="block text-white text-sm uppercase tracking-wider">Custom Orders</a>
              <a href="#about" className="block text-white text-sm uppercase tracking-wider">About</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Hero Content */}
      <main className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content Section */}
            <section className="lg:col-span-2 text-center lg:text-left">
              <h1 className="font-bold text-5xl md:text-6xl text-white leading-tight mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Stick to What Matters
              </h1>
              
              <p className="text-lg md:text-xl text-[#e5e5e5] max-w-lg mx-auto lg:mx-0 mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                Custom stickers, pre-made designs, and everything in between. Premium quality, delivered fast.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="bg-[#00D4FF] text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold hover:bg-[#00B8E6] hover:scale-105 transition-all duration-300 animate-pulse">
                  Browse Designs
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1a1a1a] transition-all duration-300">
                  Create Custom
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm text-[#a3a3a3]">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Truck size={16} />
                  <span>Free UK Shipping over KES2,000</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Award size={16} />
                  <span>Premium Vinyl</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Shield size={16} />
                  <span>Weather-resistant</span>
                </div>
              </div>
            </section>

            {/* Right Visual Section - Floating Stickers */}
            <div className="lg:col-span-3 relative h-[500px] md:h-[600px] lg:h-[700px] hidden lg:block">
              {stickers.map((sticker, index) => (
                <div
                  key={index}
                  className={`absolute ${sticker.size} cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-3`}
                  style={{
                    top: sticker.top,
                    left: sticker.left,
                    transform: `translateY(${scrollY * sticker.speed}px) ${sticker.rotation}`,
                  }}
                >
                  <div className="w-full h-full bg-gray-500 rounded-full shadow-xl flex items-center justify-center border-4 border-gray-500 overflow-hidden">
                    <img 
                      src={sticker.image} 
                      alt={`Sticker ${index + 1}`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Sticker Grid */}
            <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
              {stickers.slice(0, 4).map((sticker, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white rounded-full shadow-xl border-4 border-gray-500 cursor-pointer hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <img 
                    src={sticker.image} 
                    alt={`Sticker ${index + 1}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Trust & Social Proof Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-6 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-[#a3a3a3]">
            <div className="flex items-center gap-2">
              <span>Trusted by 10,000+ creators</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-[#3a3a3a]" />
            <div className="flex items-center gap-2">
              <Star size={14} className="fill-[#FFD700] text-[#FFD700]" />
              <span>4.9★ on Trustpilot (2,341 reviews)</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-[#3a3a3a]" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-[#2a2a2a] rounded opacity-50" />
              <div className="w-12 h-8 bg-[#2a2a2a] rounded opacity-50" />
              <div className="w-12 h-8 bg-[#2a2a2a] rounded opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerverseHero;