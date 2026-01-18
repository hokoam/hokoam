import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "اكتشفي جمالك الحقيقي",
    subtitle: "منتجات العناية بالبشرة الأصلية من أفضل الماركات العالمية",
    buttonText: "تسوقي الآن",
    buttonLink: "#shop",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=80",
  },
  {
    id: 2,
    title: "عروض حصرية",
    subtitle: "خصومات تصل إلى 50% على مستحضرات التجميل المميزة",
    buttonText: "اكتشفي العروض",
    buttonLink: "#offers",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1920&q=80",
  },
  {
    id: 3,
    title: "مجموعة الربيع الجديدة",
    subtitle: "ألوان نابضة بالحياة لإطلالة مشرقة",
    buttonText: "شاهدي المجموعة",
    buttonLink: "#new",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1920&q=80",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40" />
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl drop-shadow animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                {slide.subtitle}
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-valoria-lg px-8 py-6 text-lg animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <a href={slide.buttonLink}>{slide.buttonText}</a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-6 bg-primary"
                : "w-2.5 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
