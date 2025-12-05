import Link from "next/link";
import { ArrowRight, CheckCircle, Truck, Shield } from "lucide-react";
import MotionDiv from "@/components/MotionDiv";
import MotionSection from "@/components/MotionSection";
import MotionH2 from "@/components/MotionH2";
import MotionP from "@/components/MotionP";
import HeroCarousel from "@/components/HeroCarousel";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Products Section */}
      <ProductsSection />

      {/* Main Content */}
      <div className="relative bg-white z-10">
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pourquoi choisir BioChicken ?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nous nous engageons à vous proposer les meilleurs produits biologiques,
                élevés dans le respect de la nature et du bien-être animal.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Biologique</h3>
                <p className="text-gray-600">
                  Tous nos poulets sont certifiés bio, élevés sans pesticides ni OGM.
                </p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Livraison Rapide</h3>
                <p className="text-gray-600">
                  Livraison fraîche à domicile en 24h dans toute l'Île-de-France.
                </p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Qualité Supérieure</h3>
                <p className="text-gray-600">
                  Des produits d'excellence, contrôlés à chaque étape de la production.
                </p>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <MotionH2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Prêt à goûter la différence ?
            </MotionH2>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-green-100 mb-8 max-w-2xl mx-auto"
            >
              Rejoignez des centaines de clients satisfaits et commandez vos
              produits biologiques dès maintenant.
            </MotionP>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/boutique"
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
              >
                Voir nos produits
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </MotionDiv>
          </div>
        </section>
      </div>
    </div>
  );
}