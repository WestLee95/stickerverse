import React from 'react';
import { Sparkles, Leaf, Zap, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#202020] border-t border-[#2a2a2a]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="w-full lg:w-[45%]">
            <p className="text-xs uppercase tracking-wider text-[#00D4FF] mb-4">
              ABOUT US
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stickers That Actually Last
            </h2>
            
            <p className="text-lg md:text-xl text-[#e5e5e5] mt-4 max-w-lg">
              Because your laptop deserves better than something that peels off in a week.
            </p>
            
            <div className="mt-8 space-y-6 max-w-[500px]">
              <p className="text-base text-[#a3a3a3] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We started in a garage with one mission: make stickers that don't suck.
              </p>
              
              <p className="text-base text-[#a3a3a3] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Our stickers use premium materials and precision cutting technology that sets them apart from the rest.
              </p>
              
              <p className="text-base text-[#a3a3a3] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. We promise quality that lasts, designs that pop, and service that actually cares.
              </p>
            </div>
            
            <button className="mt-8 px-6 py-3 border-2 border-white text-white bg-transparent rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1a1a1a]">
              See Our Process
            </button>
          </div>
          
          {/* Right Column - Features */}
          <div className="w-full lg:w-[55%]">
            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 - Premium Materials */}
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Sparkles className="w-8 h-8 text-[#00D4FF] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  3-5 year outdoor life
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  Weather-resistant vinyl that won't fade
                </p>
              </div>
              
              {/* Card 2 - Eco-Conscious */}
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Leaf className="w-8 h-8 text-[#00D4FF] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  100% recyclable
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  Sustainable materials, responsible printing
                </p>
              </div>
              
              {/* Card 3 - Fast Turnaround */}
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Zap className="w-8 h-8 text-[#00D4FF] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  48hr dispatch
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  Custom orders shipped within 2 days
                </p>
              </div>
              
              {/* Card 4 - Satisfaction Guaranteed */}
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <ShieldCheck className="w-8 h-8 text-[#00D4FF] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  30-day returns
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  Not happy? Full refund, no questions
                </p>
              </div>
            </div>
            
            {/* Trust Badge Strip */}
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {/* Badge 1 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center transition-all duration-300 hover:border-[#00D4FF]">
                  <Award className="w-8 h-8 text-[#00D4FF]" />
                </div>
                <p className="text-xs text-[#737373] mt-2 text-center">
                  Climate Neutral<br />Certified
                </p>
              </div>
              
              {/* Badge 2 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center transition-all duration-300 hover:border-[#00D4FF]">
                  <Award className="w-8 h-8 text-[#00D4FF]" />
                </div>
                <p className="text-xs text-[#737373] mt-2 text-center">
                  FSC<br />Certified
                </p>
              </div>
              
              {/* Badge 3 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center transition-all duration-300 hover:border-[#00D4FF]">
                  <Award className="w-8 h-8 text-[#00D4FF]" />
                </div>
                <p className="text-xs text-[#737373] mt-2 text-center">
                  Made in<br />Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}