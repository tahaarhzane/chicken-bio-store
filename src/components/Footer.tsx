import Link from "next/link";
import {
  MessageSquare,
  Camera,
  Share2,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <Logo size="md" className="bg-white hover:bg-green-50" />
            <p className="text-green-100">
              Votre spécialiste du poulet bio de qualité supérieure, élevé dans le respect de l'environnement et du bien-être animal.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-100 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="text-green-100 hover:text-white transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-green-100 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/livraison" className="text-green-100 hover:text-white transition-colors">
                  Livraison
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="text-green-100 hover:text-white transition-colors">
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-green-100 hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-green-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-green-100">
                <MapPin className="w-4 h-4" />
                <span>123 Rue de la Ferme<br />75000 Paris</span>
              </div>
              <div className="flex items-center space-x-2 text-green-100">
                <Phone className="w-4 h-4" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2 text-green-100">
                <Mail className="w-4 h-4" />
                <span>contact@biochicken.fr</span>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
          <p>&copy; 2024 BioChicken. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}