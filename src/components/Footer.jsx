import React, { useState } from 'react';
import { Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const shopLinks = [
    'All Collections',
    'New Arrivals',
    'Best Sellers',
    'Custom Orders',
    'Sample Packs',
    'Gift Cards'
  ];

  const supportLinks = [
    'FAQ',
    'Shipping Info',
    'Returns & Refunds',
    'Track Order',
    'Size Guide',
    'Care Instructions',
    'Contact Us'
  ];

  const companyLinks = [
    'About Us',
    'Our Process',
    'Sustainability',
    'Wholesale',
    'Affiliate Program',
    'Press Kit',
    'Careers'
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', url: '#' },
    { icon: Twitter, label: 'Twitter', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' }
  ];

  const paymentMethods = ['Visa', 'Mastercard', 'PayPal', 'Apple Pay'];
  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

  return (
    <footer className="w-full bg-black border-t border-[#1a1a1a]">
      {/* Main Footer Section */}
      <div className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Brand & Mission */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">
                Stickerverse
              </h3>
              <p className="text-sm text-[#00D4FF] mb-4">
                Stick to What Matters
              </p>
              <p className="text-sm text-[#737373] leading-relaxed max-w-xs mb-6">
                Premium stickers for creatives, businesses, and anyone who believes their laptop deserves better.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className="text-[#404040] hover:text-[#00D4FF] transition-colors duration-300"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Shop */}
            <div>
              <h4 className="text-sm text-white uppercase font-semibold mb-4">
                Shop
              </h4>
              <ul className="space-y-3">
                {shopLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-[#737373] hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Support */}
            <div>
              <h4 className="text-sm text-white uppercase font-semibold mb-4">
                Support
              </h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-[#737373] hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Company & Newsletter */}
            <div>
              <h4 className="text-sm text-white uppercase font-semibold mb-4">
                Company
              </h4>
              <ul className="space-y-3 mb-8">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-[#737373] hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h5 className="text-sm text-white mb-2">
                  Stay in the Loop
                </h5>
                <p className="text-xs text-[#737373] mb-3">
                  New designs, offers, and sticker wisdom.
                </p>
                
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="bg-[#00D4FF] px-4 py-2 rounded-r-lg hover:bg-[#00D4FF]/90 transition-colors duration-300"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-4 h-4 text-[#1a1a1a]" />
                  </button>
                </div>
                
                <p className="text-xs text-[#404040] mt-2">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-6">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-[#404040] text-center md:text-left">
              © 2024 Stickerverse. All rights reserved.
            </p>

            {/* Trust Badges */}
            <div className="flex gap-4 items-center">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="text-xs text-[#404040] opacity-50 hover:opacity-100 transition-opacity duration-300"
                >
                  {method}
                </div>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-[#404040]">
              {legalLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-[#404040]">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Easter Egg */}
          <div className="mt-4 flex justify-end">
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`text-[10px] transition-all duration-300 cursor-default ${
                isHovered ? 'text-white' : 'text-[#1a1a1a]'
              }`}
            >
              Made with ☕ and probably too much caffeine in Nairobi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}