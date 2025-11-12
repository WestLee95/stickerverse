import "./App.css";

const Gallery = () => (
  <section id="gallery" className="py-24 px-6 bg-black text-center">
    <h2 className="text-4xl mb-10 font-semibold">Show Us Your Stickers</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="w-full h-48 bg-gray-800 rounded-xl hover:scale-105 transition-transform"
        ></div>
      ))}
    </div>
  </section>
);

export default Gallery;
