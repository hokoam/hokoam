import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  secondaryImage?: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestseller?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-card rounded-2xl border-2 border-transparent hover:border-primary/20 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="px-2 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
            جديد
          </span>
        )}
        {product.isBestseller && (
          <span className="px-2 py-1 text-xs font-bold bg-secondary text-secondary-foreground rounded-full">
            الأكثر مبيعاً
          </span>
        )}
        {product.isSale && discount > 0 && (
          <span className="px-2 py-1 text-xs font-bold bg-destructive text-destructive-foreground rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      {/* Favorite Button */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className={`absolute top-3 right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
          isFavorite
            ? "bg-primary/20 text-primary"
            : "bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-primary"
        }`}
      >
        <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
      </button>

      {/* Image Container */}
      <a
        href={`#product-${product.id}`}
        className="block aspect-square overflow-hidden"
        onMouseEnter={() => setShowSecondImage(true)}
        onMouseLeave={() => setShowSecondImage(false)}
      >
        <div
          className="flex w-[200%] h-full transition-transform duration-300"
          style={{
            transform: showSecondImage && product.secondaryImage ? "translateX(-50%)" : "translateX(0)",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-1/2 h-full object-cover"
          />
          {product.secondaryImage && (
            <img
              src={product.secondaryImage}
              alt={product.name}
              className="w-1/2 h-full object-cover"
            />
          )}
        </div>

        {/* Image Dots */}
        {product.secondaryImage && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            <span
              className={`w-2 h-2 rounded-full transition-all ${
                !showSecondImage ? "bg-primary scale-110" : "bg-white/60"
              }`}
            />
            <span
              className={`w-2 h-2 rounded-full transition-all ${
                showSecondImage ? "bg-primary scale-110" : "bg-white/60"
              }`}
            />
          </div>
        )}
      </a>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <a href={`#product-${product.id}`} className="block">
          <h3 className="font-bold text-card-foreground line-clamp-2 min-h-[2.5rem] leading-tight hover:text-primary transition-colors">
            {product.name}
          </h3>
        </a>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center text-secondary">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? "fill-current" : "opacity-30"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            {product.price.toLocaleString()} د.ع
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-11">
            <ShoppingCart className="w-4 h-4 mr-2" />
            أضيفي للسلة
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
