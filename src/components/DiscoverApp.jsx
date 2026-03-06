import { motion } from 'framer-motion'
import { FolderOpen, FileText, Receipt, Search, Bell, LayoutDashboard, ExternalLink } from 'lucide-react'

const DiscoverApp = () => {
  const features = [
    {
      icon: FolderOpen,
      title: "Gestion des dossiers sinistres",
      description: "Centralisez tous vos dossiers clients et suivez leur avancement en temps réel."
    },
    {
      icon: FileText,
      title: "Génération de devis professionnels",
      description: "Créez des devis conformes en quelques clics, avec calcul automatique de la TVA."
    },
    {
      icon: Receipt,
      title: "Facturation simplifiée",
      description: "Transformez vos devis en factures et suivez vos paiements."
    },
    {
      icon: Search,
      title: "Recherche d'experts et fournisseurs",
      description: "Trouvez rapidement les contacts dont vous avez besoin pour vos chantiers."
    },
    {
      icon: Bell,
      title: "Relances automatiques",
      description: "Ne perdez plus de temps : l'app relance automatiquement vos clients et assurances."
    },
    {
      icon: LayoutDashboard,
      title: "Tableau de bord complet",
      description: "Visualisez votre activité, vos revenus et vos dossiers en un coup d'œil."
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
            L'APPLICATION
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Ce que l'artisan découvrira
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Une application conçue pour simplifier le quotidien des artisans du bâtiment.
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
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-dark mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right: App Mockup */}
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
            Découvrir l'application
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default DiscoverApp
