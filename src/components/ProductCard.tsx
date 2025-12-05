"use client";

import Image from "next/image";
import { Star, Heart, Plus } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    weight: string;
    badge?: string;
    rating: number;
    inStock: boolean;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {product.badge && (
          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold z-10">
            -{discountPercentage}%
          </span>
        )}

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-10"
          aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          <Heart
            className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`}
          />
        </button>

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
        />

        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-semibold">
              Rupture de stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.rating})</span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>

        {/* Weight */}
        <p className="text-sm text-gray-600 mb-3">{product.weight}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-primary">
            {product.price.toFixed(2)} €
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {product.originalPrice.toFixed(2)} €
            </span>
          )}
          <span className="text-xs text-gray-500">/kg</span>
        </div>

        {/* Add to Cart */}
        {product.inStock ? (
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-gray-100 transition-colors"
                aria-label="Diminuer la quantité"
              >
                <span className="text-lg font-medium text-gray-600">−</span>
              </button>
              <span className="px-3 py-2 text-sm font-medium min-w-[3rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-100 transition-colors"
                aria-label="Augmenter la quantité"
              >
                <span className="text-lg font-medium text-gray-600">+</span>
              </button>
            </div>
            <button className="flex-1 bg-primary hover:bg-primary-dark text-white py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-1">
              <Plus className="w-4 h-4" />
              <span className="text-sm">Ajouter</span>
            </button>
          </div>
        ) : (
          <button
            disabled
            className="w-full bg-gray-200 text-gray-400 py-2 px-4 rounded-lg font-medium cursor-not-allowed"
          >
            Indisponible
          </button>
        )}
      </div>
    </div>
  );
}