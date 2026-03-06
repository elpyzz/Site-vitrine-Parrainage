import { motion } from 'framer-motion'
import { UserPlus, Send, Banknote } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: UserPlus,
      title: "Identifiez un artisan",
      description: "Électricien, plombier, maçon, peintre, menuisier... Tous les corps de métier du bâtiment. Famille, ami, voisin, connaissance."
    },
    {
      number: 2,
      icon: Send,
      title: "Envoyez-nous son contact",
      description: "Un simple message avec son prénom et numéro. On s'occupe de le contacter et de lui présenter le logiciel. Il bénéficie de 2 semaines d'essai gratuit."
    },
    {
      number: 3,
      icon: Banknote,
      title: "Recevez 300€",
      description: "Si l'artisan est convaincu et s'inscrit après son essai, vous recevez votre prime par virement sous 72h."
    }
  ]

  const containerVariants = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
            Comment ça marche
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark">
            Trois étapes. Zéro complication.
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                {/* Number Circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
