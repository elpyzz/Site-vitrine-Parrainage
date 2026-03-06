import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              Retour à l'accueil
            </Link>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
          >
            <h1 className="text-4xl font-bold text-primary mb-2">Mentions Légales</h1>
            <p className="text-text-muted mb-8">Dernière mise à jour : Mars 2026</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">1. Éditeur du site</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Le présent site est édité par :
                </p>
                <div className="bg-background-alt p-6 rounded-xl">
                  <p className="text-text-dark font-semibold mb-2">Louis Pereira</p>
                  <p className="text-text-muted">Entrepreneur individuel</p>
                  <p className="text-text-muted">14 Rue de Menespey</p>
                  <p className="text-text-muted">33185 Le Haillan</p>
                  <p className="text-text-muted">France</p>
                  <p className="text-text-muted mt-2">SIRET : 980 622 690 00041</p>
                  <p className="text-text-muted">Email : <a href="mailto:aosrenovbtp@gmail.com" className="text-primary hover:underline">aosrenovbtp@gmail.com</a></p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">2. Hébergement</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Le site est hébergé par :
                </p>
                <div className="bg-background-alt p-6 rounded-xl">
                  <p className="text-text-dark font-semibold mb-2">Vercel Inc.</p>
                  <p className="text-text-muted">440 N Barranca Ave #4133</p>
                  <p className="text-text-muted">Covina, CA 91723</p>
                  <p className="text-text-muted">États-Unis</p>
                  <p className="text-text-muted mt-2">Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com</a></p>
                  <p className="text-text-muted">Email : <a href="mailto:privacy@vercel.com" className="text-primary hover:underline">privacy@vercel.com</a></p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">3. Propriété intellectuelle</h2>
                <p className="text-text-muted leading-relaxed">
                  L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, etc.) est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p className="text-text-muted leading-relaxed mt-4">
                  Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable de Louis Pereira.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">4. Liens hypertextes</h2>
                <p className="text-text-muted leading-relaxed">
                  Le site peut contenir des liens vers d'autres sites internet. Louis Pereira n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">5. Limitation de responsabilité</h2>
                <p className="text-text-muted leading-relaxed">
                  Les informations présentes sur ce site sont fournies à titre indicatif. Louis Pereira s'efforce de maintenir des informations exactes et à jour, mais ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">6. Droit applicable</h2>
                <p className="text-text-muted leading-relaxed">
                  Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">7. Contact</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter :
                </p>
                <div className="bg-background-alt p-6 rounded-xl">
                  <p className="text-text-muted mb-2">
                    Par email : <a href="mailto:aosrenovbtp@gmail.com" className="text-primary hover:underline">aosrenovbtp@gmail.com</a>
                  </p>
                  <p className="text-text-muted">
                    Par Instagram : <a href="https://www.instagram.com/louispereira.exee" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@louispereira.exee</a>
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MentionsLegales
