import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const promos = [
  {
    id: 1,
    title: "خصم 30% على كريمات الترطيب",
    subtitle: "العرض ساري لفترة محدودة",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
  },
  {
    id: 2,
    title: "مجموعة المكياج الجديدة",
    subtitle: "اكتشفي أحدث الألوان",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
  },
  {
    id: 3,
    title: "شحن مجاني للطلبات فوق 50$",
    subtitle: "استفيدي من العرض الآن",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  },
];

const PromoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="offers" className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="relative h-[180px] md:h-[250px] rounded-2xl overflow-hidden">
          {/* Slides */}
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {promos.map((promo) => (
              <div key={promo.id} className="min-w-full h-full relative">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 text-white">
                  <h3 className="text-xl md:text-3xl font-display font-bold mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-white/90">{promo.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + promos.length) % promos.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % promos.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-primary/20 backdrop-blur-md px-3 py-1.5 rounded-full">
            {promos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-5 bg-primary" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSlider;
