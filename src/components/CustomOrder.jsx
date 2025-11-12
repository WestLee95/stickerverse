import "./App.css";

const CustomOrder = () => (
  <section id="custom" className="py-24 px-6 bg-black text-center">
    <h2 className="text-4xl mb-8 font-semibold">Make Your Own Universe</h2>
    <p className="text-gray-300 mb-8">Want a custom sticker? Let’s make it happen.</p>
    <form className="max-w-lg mx-auto space-y-4">
      <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 text-white rounded-lg outline-none" />
      <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 text-white rounded-lg outline-none" />
      <textarea placeholder="Describe your idea..." rows="4" className="w-full p-3 bg-gray-800 text-white rounded-lg outline-none"></textarea>
      <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-transform hover:scale-105">
        Send Request
      </button>
    </form>
  </section>
);

export default CustomOrder;
