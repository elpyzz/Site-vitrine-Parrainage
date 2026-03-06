import { motion } from 'framer-motion'
import { FileText, Receipt, Send, Calendar, ArrowRight, Camera, ExternalLink, Star } from 'lucide-react'

const DiscoverApp = () => {
  const features = [
    {
      icon: FileText,
      title: "Devis rapides et professionnels",
      description: "Réalisez vos devis en quelques minutes, sans Excel ni modèles compliqués.",
      exclusive: false
    },
    {
      icon: Receipt,
      title: "Factures claires, paiements plus rapides",
      description: "Créez des factures conformes et suivez facilement celles qui restent à encaisser.",
      exclusive: false
    },
    {
      icon: Send,
      title: "Envoi et relances en 1 clic",
      description: "Envoyez vos devis et factures par email. Relancez en un bouton, quand vous le décidez.",
      exclusive: false
    },
    {
      icon: Calendar,
      title: "Planning clair, zéro papier",
      description: "Visualisez vos chantiers et interventions en un coup d'œil. Fini le planning dans la tête.",
      exclusive: false
    },
    {
      icon: ArrowRight,
      title: "Devis → Facture en 1 clic",
      description: "Transformez un devis accepté en facture en 1 clic, sans ressaisir les montants.",
      exclusive: false
    },
    {
      icon: Camera,
      title: "Estimation via photo",
      description: "Gagnez du temps en estimant certains chantiers à partir d'une photo.",
      exclusive: true
    }
  ]

  const containerVariants = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <section id="discover-app" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            LE LOGICIEL
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Ce que l'artisan découvrira
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Un logiciel conçu pour simplifier le quotidien des artisans du bâtiment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Features List */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-background-alt p-6 rounded-2xl hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 relative">
                      <Icon className="text-primary" size={24} />
                      {feature.exclusive && (
                        <div className="absolute -top-1 -right-1">
                          <Star className="text-accent fill-accent" size={16} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-text-dark">
                          {feature.title}
                        </h3>
                        {feature.exclusive && (
                          <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full flex items-center gap-1">
                            <Star className="fill-accent text-accent" size={12} />
                            Exclusif
                          </span>
                        )}
                      </div>
                      <p className="text-text-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right: Logiciel Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 aspect-[4/3] flex items-center justify-center border-2 border-primary/20">
              <div className="text-center">
                <div className="text-6xl lg:text-7xl font-bold text-primary/30 mb-4">
                  Aos Renov
                </div>
                <p className="text-text-muted text-lg font-medium mb-6">
                  Interface intuitive et moderne
                </p>
                <div className="bg-white rounded-2xl p-6 shadow-xl max-w-md mx-auto">
                  <div className="space-y-3 text-left">
                    <div className="h-3 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-3 bg-primary/10 rounded w-full"></div>
                    <div className="h-3 bg-primary/10 rounded w-5/6"></div>
                    <div className="h-20 bg-primary/5 rounded mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://www.aosrenovbtp.fr/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary hover:text-white transition-colors"
          >
            Découvrir le logiciel
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default DiscoverApp
