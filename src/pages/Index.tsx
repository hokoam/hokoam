import Header from "@/components/valoria/Header";
import HeroSlider from "@/components/valoria/HeroSlider";
import CategorySection from "@/components/valoria/CategorySection";
import ProductsSection from "@/components/valoria/ProductsSection";
import PromoSlider from "@/components/valoria/PromoSlider";
import Footer from "@/components/valoria/Footer";
import MobileNav from "@/components/valoria/MobileNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <main>
        <HeroSlider />
        <CategorySection />
        <ProductsSection />
        <PromoSlider />
      </main>
      <Footer />
      <MobileNav />
      {/* Spacer for mobile nav */}
      <div className="h-24 md:hidden" />
    </div>
  );
};

export default Index;
