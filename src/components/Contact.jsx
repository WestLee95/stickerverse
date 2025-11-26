/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Instagram, Twitter, Facebook, Linkedin, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'EMAIL',
      value: 'hello@stickerverse.co.uk',
      type: 'email',
      href: 'mailto:hello@stickerverse.co.uk'
    },
    {
      icon: Phone,
      label: 'PHONE',
      value: '+44 20 1234 5678',
      type: 'phone',
      href: 'tel:+442012345678',
      note: 'Mon-Fri, 9am-6pm GMT'
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Facebook, label: 'Facebook' },
    { icon: Linkedin, label: 'LinkedIn' }
  ];

  const faqs = [
    'What file formats do you accept?',
    'How long does shipping take?',
    'Do you offer bulk discounts?',
    'Can I get a sample pack?',
    "What's your return policy?",
    'Do you ship internationally?'
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-wider text-[#00D4FF] mb-3">
            GET IN TOUCH
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Make Something Brilliant
          </h2>
          
          <p className="text-base md:text-lg text-[#e5e5e5]">
            Questions? Custom ideas? Just fancy a chat? We're all ears.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* LEFT COLUMN - Contact Methods */}
          <div className="w-full lg:w-1/3">
            {/* Email */}
            <div className="mb-8">
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-[#00D4FF] mt-1" />
                <div>
                  <p className="text-xs text-[#737373] uppercase tracking-wider mb-2">
                    EMAIL
                  </p>
                  <a
                    href="mailto:hello@stickerverse.co.uk"
                    className="text-base text-white font-medium hover:text-[#00D4FF] hover:underline transition-colors duration-300"
                  >
                    hello@stickerverse.co.ke
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-[#00D4FF] mt-1" />
                <div>
                  <p className="text-xs text-[#737373] uppercase tracking-wider mb-2">
                    PHONE
                  </p>
                  <a
                    href="tel:+442012345678"
                    className="text-base text-white font-medium hover:text-[#00D4FF] hover:underline transition-colors duration-300"
                  >
                    +254 717 972 081
                  </a>
                  <p className="text-xs text-[#737373] mt-1">
                    Mon-Fri, 9am-6pm GMT
                  </p>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="mb-8">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-6 h-6 text-[#00D4FF] mt-1" />
                <div>
                  <p className="text-xs text-[#737373] uppercase tracking-wider mb-2">
                    LIVE CHAT
                  </p>
                  <button className="border border-[#00D4FF] bg-transparent text-[#00D4FF] px-4 py-2 rounded-lg text-sm hover:bg-[#00D4FF] hover:text-white transition-all duration-300">
                    Start Chat
                  </button>
                  <p className="text-xs text-[#737373] mt-2">
                    Usually replies within 5 minutes
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-xs text-[#737373] uppercase tracking-wider mb-4">
                FOLLOW US
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={index}
                      className="w-10 h-10 bg-[#202020] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#00D4FF] transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-[#737373] group-hover:text-[#00D4FF] transition-colors duration-300" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-[#202020] border border-[#2a2a2a] p-6 md:p-8 rounded-xl shadow-lg">
              <div>
                {/* Name Input */}
                <div className="mb-6">
                  <label htmlFor="name" className="text-sm text-white font-medium mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20 transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div className="mb-6">
                  <label htmlFor="email" className="text-sm text-white font-medium mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20 transition-all duration-300"
                  />
                </div>

                {/* Subject Dropdown */}
                <div className="mb-6">
                  <label htmlFor="subject" className="text-sm text-white font-medium mb-2 block">
                    What's this about?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20 transition-all duration-300"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Custom Order">Custom Order</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Press & Media">Press & Media</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="mb-6">
                  <label htmlFor="message" className="text-sm text-white font-medium mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what you're thinking..."
                    rows="6"
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white resize-none focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20 transition-all duration-300"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-[#00D4FF] text-base font-semibold text-[#1a1a1a] px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#00D4FF]/90 hover:scale-105 transition-all duration-300"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 border-t border-[#2a2a2a] pt-16">
          <h3 className="text-2xl text-white font-bold mb-8 text-center">
            Common Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((question, index) => (
              <div
                key={index}
                className="border border-[#2a2a2a] bg-transparent p-5 rounded-lg cursor-pointer hover:bg-[#202020] hover:border-[#00D4FF]/50 transition-all duration-300"
              >
                <p className="text-base text-white font-medium mb-2">
                  {question}
                </p>
                <div className="flex items-center gap-1 text-sm text-[#00D4FF]">
                  View answer
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}