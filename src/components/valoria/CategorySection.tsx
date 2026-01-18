import { Sparkles, Droplet, Eye, Palette, Heart, Star } from "lucide-react";

interface Category {
  id: number;
  name: string;
  icon: React.ReactNode;
  productCount: number;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "العناية بالبشرة",
    icon: <Droplet className="w-6 h-6" />,
    productCount: 124,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
  },
  {
    id: 2,
    name: "المكياج",
    icon: <Palette className="w-6 h-6" />,
    productCount: 98,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80",
  },
  {
    id: 3,
    name: "العيون",
    icon: <Eye className="w-6 h-6" />,
    productCount: 76,
    image: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&q=80",
  },
  {
    id: 4,
    name: "الشفاه",
    icon: <Heart className="w-6 h-6" />,
    productCount: 65,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&q=80",
  },
  {
    id: 5,
    name: "العطور",
    icon: <Sparkles className="w-6 h-6" />,
    productCount: 54,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80",
  },
  {
    id: 6,
    name: "الأكثر مبيعاً",
    icon: <Star className="w-6 h-6" />,
    productCount: 42,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
  },
];

const CategorySection = () => {
  return (
    <section id="categories" className="py-16 bg-gradient-to-br from-background via-accent/30 to-background relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-[10%] right-[5%] w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary opacity-10 animate-float" />
      <div className="absolute bottom-[15%] left-[8%] w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary opacity-10 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[40%] right-[15%] w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary opacity-10 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            تصفحي <span className="text-primary">الأقسام</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اكتشفي مجموعتنا المتنوعة من منتجات الجمال والعناية
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#category-${category.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg text-center mb-1">{category.name}</h3>
                <span className="text-sm text-white/80">{category.productCount} منتج</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
