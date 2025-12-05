import Image from "next/image";
import { Search, Filter, Grid, List } from "lucide-react";
import ProductsSection from "@/components/ProductsSection";

export default function BoutiquePage() {
  return (
    <div>
      {/* Hero Section Boutique - Hauteur réduite */}
      <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/boutique-hero.jpg"
            alt="Boutique BioChicken"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Notre Boutique
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
              Découvrez toute notre sélection de poulets bio de qualité supérieure
            </p>
          </div>
        </div>
      </section>

      {/* Barre de filtres */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Filtres */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filtrer</span>
              </button>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button className="p-2 bg-primary text-white">
                  <Grid className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-gray-50">
                  <List className="w-4 h-4" />
                </button>
              </div>

              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Pertinence</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Nouveautés</option>
                <option>Note</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Produits */}
      <ProductsSection />
    </div>
  );
}