import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Send, Calendar, ArrowRight, Camera, ExternalLink, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const DiscoverApp = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const features = [
    {
      icon: FileText,
      title: "Devis rapides et professionnels",
      description: "Devis en quelques minutes, sans Excel ni modèles compliqués.",
      exclusive: false
    },
    {
      icon: Send,
      title: "Envoi, relances et signature électronique",
      description: "Envoi par email, relances en 1 clic. Les clients signent les devis depuis leur téléphone — valable légalement.",
      exclusive: false
    },
    {
      icon: Calendar,
      title: "Planning clair, zéro papier",
      description: "Chantiers et interventions en un coup d'œil.",
      exclusive: false
    },
    {
      icon: ArrowRight,
      title: "Devis → Facture et comptabilité simple",
      description: "Devis accepté en facture en 1 clic. Comptabilité simple pour suivre l'essentiel.",
      exclusive: false
    },
    {
      icon: Camera,
      title: "Estimation via photo",
      description: "Estimez certains chantiers à partir d'une photo.",
      exclusive: true
    }
  ]

  // Fonction pour encoder les URLs avec espaces
  const getImagePath = (filename) => {
    return `/images/${encodeURIComponent(filename)}`
  }

  const screenshots = [
    {
      src: getImagePath('Numéro 1.jpg'),
      alt: 'Générateur de Devis - Créez des devis professionnels conformes BTP',
      title: 'Générateur de Devis'
    },
    {
      src: getImagePath('Numéro 2.jpg'),
      alt: 'Estimation Automatique des Chantiers - Estimation via photo',
      title: 'Estimation via Photo'
    },
    {
      src: getImagePath('Numéro 3.jpg'),
      alt: 'Dossiers - Gérez tous vos devis et factures',
      title: 'Gestion des Dossiers'
    },
    {
      src: getImagePath('Numéro 5.jpg'),
      alt: 'Dashboard - Vue d\'ensemble de votre activité',
      title: 'Tableau de Bord'
    },
    {
      src: getImagePath('Numéro 6.jpg'),
      alt: 'Planning des Chantiers - Calendrier intégré pour organiser vos interventions',
      title: 'Planning des Chantiers'
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

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
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 relative text-2xl">
                      {feature.emoji ? <span>{feature.emoji}</span> : <Icon className="text-primary" size={24} />}
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

          {/* Right: Screenshots Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image Display */}
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-4 lg:p-6 border-2 border-primary/20 overflow-hidden">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={screenshots[currentImageIndex].src}
                      alt={screenshots[currentImageIndex].alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        const fallback = e.target.nextElementSibling
                        if (fallback) fallback.style.display = 'flex'
                      }}
                    />
                    <div 
                      className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 text-gray-300 absolute inset-0"
                    >
                      <div className="text-center p-8">
                        <div className="text-5xl font-bold text-primary/40 mb-3">Aos Renov</div>
                        <div className="text-xl font-semibold text-white mb-2">{screenshots[currentImageIndex].title}</div>
                        <div className="text-sm text-gray-400">Capture d'écran à venir</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all z-10"
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all z-10"
                  aria-label="Image suivante"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">
                    {screenshots[currentImageIndex].title}
                  </p>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? 'border-primary shadow-lg scale-105'
                        : 'border-gray-300 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={screenshot.src}
                      alt={screenshot.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        const fallback = e.target.nextElementSibling
                        if (fallback) fallback.style.display = 'flex'
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center bg-primary/10 text-primary/40 text-xs font-bold">
                      {index + 1}
                    </div>
                  </button>
                ))}
              </div>

              {/* Image Counter */}
              <div className="text-center mt-2">
                <span className="text-sm text-text-muted">
                  {currentImageIndex + 1} / {screenshots.length}
                </span>
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
