import { motion } from 'framer-motion'
import { Wallet, TrendingUp, Shield, Zap, Users, Eye } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Wallet,
      title: "Aucun investissement",
      description: "Rien à payer, rien à vendre. Juste nous mettre en contact."
    },
    {
      icon: TrendingUp,
      title: "Aucune limite",
      description: "Parrainez autant d'artisans que vous voulez. 300€ par inscription."
    },
    {
      icon: Shield,
      title: "Zéro risque pour l'artisan",
      description: "2 semaines d'essai gratuit. S'il n'est pas convaincu, il arrête."
    },
    {
      icon: Zap,
      title: "Paiement rapide",
      description: "Virement sous 72h après validation de l'inscription."
    },
    {
      icon: Users,
      title: "Tout le monde peut participer",
      description: "Famille, amis, collègues... Aucune restriction."
    },
    {
      icon: Eye,
      title: "Suivi transparent",
      description: "Vous êtes informé à chaque étape du processus."
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
    <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-background-alt">
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
            Pourquoi participer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark">
            Tous les avantages, aucun inconvénient.
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
