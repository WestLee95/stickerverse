import React, { useState } from 'react';
import { Upload, Maximize2, Eye, Package, ArrowRight, Lock, ShieldCheck, Sparkles } from 'lucide-react';

export default function CustomOrder() {
  const [selectedSize, setSelectedSize] = useState('2"');
  const [quantity, setQuantity] = useState(100);
  const [selectedFinish, setSelectedFinish] = useState('Glossy');

  const sizes = ['2"', '3"', '4"', '6"', 'Custom'];
  const finishes = ['Glossy', 'Matte', 'Holographic'];

  const processSteps = [
    {
      icon: Upload,
      title: 'Upload Your Design',
      description: 'JPG, PNG, or SVG files accepted'
    },
    {
      icon: Maximize2,
      title: 'Choose Size & Quantity',
      description: 'From 2" to 12" diameter, 10-10,000 units'
    },
    {
      icon: Eye,
      title: 'Review Your Proof',
      description: "We'll send a digital proof within 24hrs"
    },
    {
      icon: Package,
      title: 'Receive Your Stickers',
      description: 'Dispatched within 48hrs of approval'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-linear-to-b from-[#1a1a1a] to-[#202020] border-t border-[#2a2a2a]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* LEFT SIDE - Process Info */}
          <div className="w-full lg:w-1/2">
            {/* Header */}
            <div className="mb-10">
              <p className="text-xs uppercase tracking-wider text-[#00D4FF] mb-3">
                CUSTOM ORDERS
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Design, Perfectly Printed
              </h2>
              
              <p className="text-base md:text-lg text-[#e5e5e5] leading-relaxed max-w-md">
                Upload your artwork and we'll transform it into premium vinyl stickers. Perfect for branding, personal projects, or gifts that actually matter.
              </p>
            </div>

            {/* Process Timeline */}
            <div className="relative border-l-2 border-[#00D4FF] pl-8 mb-10">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative mb-8 last:mb-0">
                    {/* Circle Indicator */}
                    <div className="absolute left-[-42px] w-12 h-12 bg-[#00D4FF] rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Step Content */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#a3a3a3] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pricing Teaser */}
            <div className="border border-[#2a2a2a] rounded-lg p-4 bg-[#202020]">
              <p className="text-base text-white font-medium mb-2">
                Starting from £0.85 per sticker
              </p>
              <button className="text-sm text-[#00D4FF] hover:underline flex items-center gap-1">
                View full pricing
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Order Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#202020] border border-[#2a2a2a] p-6 md:p-8 rounded-2xl shadow-2xl">
              <form>
                {/* Upload Area */}
                <div className="h-40 md:h-48 border-2 border-dashed border-[#404040] rounded-lg bg-[#1a1a1a] flex flex-col items-center justify-center cursor-pointer hover:border-[#00D4FF] transition-colors duration-300 mb-6">
                  <Upload className="w-12 h-12 text-[#404040]" />
                  <p className="text-sm text-[#737373] mt-3">
                    Drop your file here or click to browse
                  </p>
                  <p className="text-xs text-[#404040] mt-1">
                    JPG, PNG, SVG (Max 10MB)
                  </p>
                </div>

                {/* Size Selector */}
                <div className="mb-6">
                  <label className="text-sm text-white font-medium mb-3 block">
                    Sticker Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedSize === size
                            ? 'bg-[#00D4FF] border-[#00D4FF] text-white'
                            : 'border border-[#404040] bg-transparent text-[#737373] hover:border-white hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Input */}
                <div className="mb-6">
                  <label className="text-sm text-white font-medium mb-3 block">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 rounded-lg text-white text-center focus:outline-none focus:border-[#00D4FF] transition-colors"
                    min="10"
                    max="10000"
                  />
                  <p className="text-xs text-[#404040] mt-2">
                    Volume discounts apply at 500+ units
                  </p>
                </div>

                {/* Finish Selector */}
                <div className="mb-8">
                  <label className="text-sm text-white font-medium mb-3 block">
                    Finish
                  </label>
                  <div className="flex flex-col gap-3">
                    {finishes.map((finish) => (
                      <button
                        key={finish}
                        type="button"
                        onClick={() => setSelectedFinish(finish)}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          selectedFinish === finish
                            ? 'border-[#00D4FF]'
                            : 'border-[#404040]'
                        }`}>
                          {selectedFinish === finish && (
                            <div className="w-3 h-3 rounded-full bg-[#00D4FF]"></div>
                          )}
                        </div>
                        <span className="text-base text-[#e5e5e5]">{finish}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimated Price Display */}
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 mb-6">
                  <p className="text-sm text-[#737373] uppercase tracking-wider mb-2">
                    Estimated Price
                  </p>
                  <p className="text-4xl font-bold text-white mb-2">
                    £127.50
                  </p>
                  <p className="text-sm text-[#a3a3a3]">
                    Includes free UK shipping
                  </p>
                  <p className="text-xs text-[#404040] mt-2">
                    Final price confirmed after proof approval
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#00D4FF] text-lg font-semibold text-[#1a1a1a] rounded-lg hover:bg-[#00D4FF]/90 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Instant Quote
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Trust Indicators */}
                <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#404040]" />
                    <span className="text-xs text-[#737373]">Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#404040]" />
                    <span className="text-xs text-[#737373]">Money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#404040]" />
                    <span className="text-xs text-[#737373]">Free artwork setup</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}