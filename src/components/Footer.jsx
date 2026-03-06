import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">Aos Renov</div>
            <p className="text-sm text-gray-400">
              Prime de 300€ versée par virement après validation. 
              L'artisan bénéficie de 2 semaines d'essai gratuit.
            </p>
          </div>

          {/* L'application */}
          <div>
            <h3 className="font-semibold text-white mb-4">L'application</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.aosrenovbtp.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Découvrir l'app
                </a>
              </li>
              <li>
                <a href="https://www.aosrenovbtp.fr/#fonctionnalites" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="https://www.aosrenovbtp.fr/#tarifs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="https://www.aosrenovbtp.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Se connecter
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">
                  Avantages
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aos Renov. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
