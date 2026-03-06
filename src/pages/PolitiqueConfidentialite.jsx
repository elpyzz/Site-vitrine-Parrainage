import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const PolitiqueConfidentialite = () => {
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
            <h1 className="text-4xl font-bold text-primary mb-2">Politique de Confidentialité</h1>
            <p className="text-text-muted mb-8">Dernière mise à jour : Mars 2026</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <p className="text-text-muted leading-relaxed mb-6">
                  La présente politique de confidentialité décrit comment Louis Pereira (ci-après "nous", "notre") collecte, utilise et protège les données personnelles des utilisateurs du site (ci-après "vous", "utilisateur").
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">1. Responsable du traitement</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Le responsable du traitement des données personnelles est :
                </p>
                <div className="bg-background-alt p-6 rounded-xl">
                  <p className="text-text-dark font-semibold mb-2">Louis Pereira</p>
                  <p className="text-text-muted">14 Rue de Menespey</p>
                  <p className="text-text-muted">33185 Le Haillan</p>
                  <p className="text-text-muted">Email : <a href="mailto:aosrenovbtp@gmail.com" className="text-primary hover:underline">aosrenovbtp@gmail.com</a></p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">2. Données collectées</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Dans le cadre du Programme Apporteur d'Affaires, nous sommes susceptibles de collecter les données suivantes :
                </p>
                <div className="space-y-4">
                  <div className="bg-background-alt p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-text-dark mb-3">Données de l'apporteur d'affaires :</h3>
                    <ul className="list-disc list-inside space-y-2 text-text-muted">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Pseudo Instagram</li>
                      <li>Coordonnées bancaires (IBAN) pour le versement des primes</li>
                    </ul>
                  </div>
                  <div className="bg-background-alt p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-text-dark mb-3">Données de l'artisan présenté :</h3>
                    <ul className="list-disc list-inside space-y-2 text-text-muted">
                      <li>Prénom</li>
                      <li>Numéro de téléphone</li>
                      <li>Corps de métier</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">3. Finalités du traitement</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Les données collectées sont utilisées pour :
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                  <li>Gérer le programme d'apporteur d'affaires</li>
                  <li>Contacter les artisans présentés</li>
                  <li>Verser les primes de parrainage</li>
                  <li>Communiquer avec les participants sur l'avancement de leur parrainage</li>
                  <li>Répondre aux demandes de contact</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">4. Base légale du traitement</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Le traitement de vos données est fondé sur :
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                  <li><strong className="text-text-dark">L'exécution d'un contrat</strong> : la participation au programme de parrainage</li>
                  <li><strong className="text-text-dark">Le consentement</strong> : pour l'envoi de communications marketing (le cas échéant)</li>
                  <li><strong className="text-text-dark">L'intérêt légitime</strong> : pour améliorer nos services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">5. Destinataires des données</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Vos données personnelles sont traitées uniquement par Louis Pereira et ne sont transmises à aucun tiers, à l'exception :
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                  <li>De l'hébergeur du site (Vercel) pour des raisons techniques</li>
                  <li>Des établissements bancaires pour le versement des primes</li>
                  <li>Des autorités compétentes si la loi l'exige</li>
                </ul>
                <p className="text-text-muted leading-relaxed mt-4">
                  Nous ne vendons ni ne louons vos données personnelles à des tiers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">6. Durée de conservation</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Les données personnelles sont conservées :
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                  <li><strong className="text-text-dark">Données des apporteurs d'affaires</strong> : 3 ans après la dernière interaction</li>
                  <li><strong className="text-text-dark">Données des artisans présentés</strong> : 3 ans après la collecte</li>
                  <li><strong className="text-text-dark">Données de facturation</strong> : 10 ans (obligation légale comptable)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">7. Vos droits</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                  <li><strong className="text-text-dark">Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
                  <li><strong className="text-text-dark">Droit de rectification</strong> : corriger des données inexactes</li>
                  <li><strong className="text-text-dark">Droit à l'effacement</strong> : demander la suppression de vos données</li>
                  <li><strong className="text-text-dark">Droit à la limitation</strong> : restreindre le traitement de vos données</li>
                  <li><strong className="text-text-dark">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                  <li><strong className="text-text-dark">Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                </ul>
                <p className="text-text-muted leading-relaxed mt-4">
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:aosrenovbtp@gmail.com" className="text-primary hover:underline">aosrenovbtp@gmail.com</a>
                </p>
                <p className="text-text-muted leading-relaxed mt-2">
                  Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">8. Sécurité des données</h2>
                <p className="text-text-muted leading-relaxed">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisés.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">9. Cookies</h2>
                <p className="text-text-muted leading-relaxed">
                  Ce site n'utilise pas de cookies de tracking publicitaire. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">10. Modifications</h2>
                <p className="text-text-muted leading-relaxed">
                  Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. La date de dernière mise à jour sera modifiée en conséquence.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">11. Contact</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Pour toute question relative à cette politique de confidentialité :
                </p>
                <div className="bg-background-alt p-6 rounded-xl">
                  <p className="text-text-muted mb-2">
                    Email : <a href="mailto:aosrenovbtp@gmail.com" className="text-primary hover:underline">aosrenovbtp@gmail.com</a>
                  </p>
                  <p className="text-text-muted">
                    Instagram : <a href="https://www.instagram.com/louispereira.exee" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@louispereira.exee</a>
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

export default PolitiqueConfidentialite
