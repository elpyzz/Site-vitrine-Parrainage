import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const ConditionsProgramme = () => {
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
            <h1 className="text-4xl font-bold text-primary mb-2">Conditions Générales du Programme Apporteur d'Affaires</h1>
            <p className="text-text-muted mb-8">Dernière mise à jour : Mars 2026</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">Article 1 – Objet</h2>
                <p className="text-text-muted leading-relaxed">
                  Les présentes conditions générales définissent les modalités de participation au Programme Apporteur d'Affaires proposé par Louis Pereira (ci-après "l'Organisateur") dans le cadre de la promotion de l'application ArtisanApp.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">Article 2 – Définitions</h2>
                <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                  <li><strong className="text-text-dark">Apporteur d'affaires</strong> : toute personne physique qui présente un artisan à l'Organisateur</li>
                  <li><strong className="text-text-dark">Artisan</strong> : professionnel du bâtiment présenté par l'Apporteur d'affaires</li>
                  <li><strong className="text-text-dark">Prime</strong> : rémunération versée à l'Apporteur d'affaires en cas de parrainage réussi</li>
                  <li><strong className="text-text-dark">Parrainage réussi</strong> : inscription définitive de l'artisan à l'application ArtisanApp après sa période d'essai</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">Article 3 – Conditions de participation</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-dark mb-3">3.1 Éligibilité de l'Apporteur d'affaires</h3>
                    <p className="text-text-muted leading-relaxed mb-3">
                      Peut participer au programme toute personne physique :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                      <li>Majeure (18 ans révolus)</li>
                      <li>Résidant en France métropolitaine</li>
                      <li>Disposant d'un compte bancaire français pour recevoir la prime</li>
                    </ul>
                    <p className="text-text-muted leading-relaxed mt-4">
                      Aucune restriction de lien familial ou personnel n'est appliquée. L'Apporteur d'affaires peut présenter des membres de sa famille, amis, voisins ou connaissances.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-dark mb-3">3.2 Éligibilité de l'artisan</h3>
                    <p className="text-text-muted leading-relaxed mb-3">
                      L'artisan présenté doit :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                      <li>Être un professionnel du bâtiment (tous corps de métier : électricien, plombier, maçon, peintre, menuisier, carreleur, couvreur, chauffagiste, etc.)</li>
                      <li>Disposer d'un numéro SIRET valide</li>
                      <li>Ne pas être déjà inscrit à l'application ArtisanApp</li>
                      <li>Ne pas avoir déjà été présenté par un autre Apporteur d'affaires</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">Article 4 – Modalités de parrainage</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-dark mb-3">4.1 Procédure</h3>
                    <ol className="list-decimal list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                      <li>L'Apporteur d'affaires contacte l'Organisateur via Instagram (@louispereira.exee) en fournissant le prénom et le numéro de téléphone de l'artisan</li>
                      <li>L'Organisateur contacte l'artisan pour lui présenter l'application</li>
                      <li>L'artisan bénéficie d'une période d'essai gratuite de 2 semaines, sans engagement</li>
                      <li>Si l'artisan décide de s'inscrire définitivement après sa période d'essai, le parrainage est validé</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-dark mb-3">4.2 Validation du parrainage</h3>
                    <p className="text-text-muted leading-relaxed mb-3">
                      Le parrainage est considéré comme réussi lorsque l'artisan :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                      <li>A terminé sa période d'essai de 2 semaines</li>
                      <li>A choisi de poursuivre son inscription à l'application</li>
                      <li>A validé son inscription par le paiement de son premier abonnement</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">Article 5 – Prime de parrainage</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-dark mb-3">5.1 Montant</h3>
                    <p className="text-text-muted leading-relaxed">
                      La prime de parrainage est fixée à <strong className="text-primary text-xl">300€</strong> (trois cents euros) par artisan inscrit.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-dark mb-3">5.2 Conditions de versement</h3>
                    <p className="text-text-muted leading-relaxed mb-3">
                      La prime est versée :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                      <li>Par virement bancaire sur le compte fourni par l'Apporteur d'affaires</li>
                      <li>Dans un délai de 72 heures ouvrées après validation du parrainage</li>
                      <li>Sous réserve de la communication des coordonnées bancaires (IBAN/BIC)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-dark mb-3">5.3 Fiscalité</h3>
                    <p className="text-text-muted leading-relaxed">
                      La prime constitue un revenu imposable. L'Apporteur d'affaires est seul responsable de la déclaration de ce revenu auprès de l'administration fiscale française.
                    </p>
                    <p className="text-text-muted leading-relaxed mt-2">
                      Une facture ou un justificatif de paiement pourra être fourni sur demande.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-dark mb-3">5.4 Aucun plafond</h3>
                    <p className="text-text-muted leading-relaxed">
                      Il n'existe aucune limite au nombre de parrainages. L'Apporteur d'affaires peut présenter autant d'artisans qu'il le souhaite.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">Article 6 – Engagements de l'Apporteur d'affaires</h2>
                <p className="text-text-muted leading-relaxed mb-3">
                  L'Apporteur d'affaires s'engage à :
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                  <li>Fournir des informations exactes et sincères</li>
                  <li>Obtenir l'accord préalable de l'artisan avant de transmettre ses coordonnées</li>
                  <li>Ne pas utiliser de pratiques déloyales, trompeuses ou abusives</li>
                  <li>Ne pas présenter de faux contacts ou de contacts fictifs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">Article 7 – Cas de non-versement de la prime</h2>
                <p className="text-text-muted leading-relaxed mb-3">
                  La prime ne sera pas versée dans les cas suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                  <li>L'artisan était déjà inscrit à ArtisanApp</li>
                  <li>L'artisan a déjà été présenté par un autre Apporteur d'affaires</li>
                  <li>L'artisan ne s'inscrit pas définitivement après sa période d'essai</li>
                  <li>Les informations fournies par l'Apporteur d'affaires sont fausses ou frauduleuses</li>
                  <li>L'artisan demande la résiliation de son abonnement dans les 14 jours suivant son inscription (droit de rétractation)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">Article 8 – Modification et suspension du programme</h2>
                <p className="text-text-muted leading-relaxed mb-3">
                  L'Organisateur se réserve le droit de :
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                  <li>Modifier les conditions du programme à tout moment</li>
                  <li>Modifier le montant de la prime</li>
                  <li>Suspendre ou arrêter le programme</li>
                </ul>
                <p className="text-text-muted leading-relaxed mt-4">
                  Toute modification sera communiquée sur le site et prendra effet pour les nouveaux parrainages uniquement. Les parrainages en cours resteront soumis aux conditions en vigueur au moment de leur initiation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">Article 9 – Responsabilité</h2>
                <p className="text-text-muted leading-relaxed mb-3">
                  L'Organisateur ne peut être tenu responsable :
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-muted bg-background-alt p-6 rounded-xl">
                  <li>Du refus de l'artisan de s'inscrire</li>
                  <li>De la décision de l'artisan de ne pas poursuivre après sa période d'essai</li>
                  <li>Des retards de versement dus à des informations bancaires erronées</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">Article 10 – Protection des données</h2>
                <p className="text-text-muted leading-relaxed">
                  Les données personnelles collectées dans le cadre du programme sont traitées conformément à notre <Link to="/confidentialite" className="text-primary hover:underline">Politique de Confidentialité</Link>, accessible sur ce site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">Article 11 – Droit applicable et litiges</h2>
                <p className="text-text-muted leading-relaxed">
                  Les présentes conditions sont soumises au droit français.
                </p>
                <p className="text-text-muted leading-relaxed mt-2">
                  En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les tribunaux compétents de Bordeaux seront seuls compétents.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-dark mb-4">Article 12 – Contact</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Pour toute question relative au programme :
                </p>
                <div className="bg-background-alt p-6 rounded-xl">
                  <p className="text-text-dark font-semibold mb-2">Louis Pereira</p>
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

export default ConditionsProgramme
