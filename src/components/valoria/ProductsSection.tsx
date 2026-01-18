import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "كريم مرطب للبشرة بخلاصة الهيالورونيك",
    price: 45000,
    originalPrice: 65000,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=400&q=80",
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "أحمر شفاه مات طويل الأمد",
    price: 25000,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&q=80",
    rating: 4.5,
    reviewCount: 89,
    isBestseller: true,
  },
  {
    id: 3,
    name: "باليت ظلال عيون 12 لون",
    price: 55000,
    originalPrice: 75000,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80",
    rating: 4.9,
    reviewCount: 256,
    isSale: true,
  },
  {
    id: 4,
    name: "سيروم فيتامين سي للوجه",
    price: 38000,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
    rating: 4.7,
    reviewCount: 178,
    isNew: true,
  },
  {
    id: 5,
    name: "ماسكارا تكثيف وإطالة الرموش",
    price: 18000,
    image: "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?w=400&q=80",
    rating: 4.6,
    reviewCount: 203,
    isBestseller: true,
  },
  {
    id: 6,
    name: "كريم أساس بتغطية كاملة",
    price: 42000,
    originalPrice: 55000,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
    rating: 4.4,
    reviewCount: 145,
    isSale: true,
  },
];

const ProductsSection = () => {
  return (
    <section id="shop" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            منتجاتنا <span className="text-primary">المميزة</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اكتشفي أحدث وأفضل منتجات الجمال المختارة بعناية لكِ
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#all-products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-valoria transition-all hover:-translate-y-1"
          >
            عرض جميع المنتجات
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
