import "./App.css";

const steps = [
  {
    title: "Pick your stickers",
    desc: "Choose what you love from our collections.",
  },
  { title: "Send us your order", desc: "Message via WhatsApp or Instagram." },
  {
    title: "Pay via bank transfer",
    desc: "Account: 123-456789 - Stickerverse Co.",
  },
  { title: "Wait for your package", desc: "Printed fresh, delivered fast." },
];

const HowToOrder = () => (
  <section id="howto" className="py-24 px-6 bg-gray-900 text-center">
    <h2 className="text-4xl mb-10 font-semibold">Smooth Sailing Checkout</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {steps.map((s, i) => (
        <div
          key={i}
          className="w-64 bg-black border border-yellow-400 rounded-xl p-6 hover:scale-105 transition-transform"
        >
          <h3 className="text-xl font-bold mb-2">{s.title}</h3>
          <p className="text-gray-300">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowToOrder;
