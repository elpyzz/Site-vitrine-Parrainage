import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Aos Renov
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('discover-app')}
              className="text-text-dark hover:text-primary transition-colors font-medium"
            >
              L'application
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-text-dark hover:text-primary transition-colors font-medium"
            >
              Comment ça marche
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-text-dark hover:text-primary transition-colors font-medium"
            >
              Avantages
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-text-dark hover:text-primary transition-colors font-medium"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-text-dark hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('cta')}
              className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-primary-light transition-colors"
            >
              Participer
              <ArrowRight size={18} />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('cta')}
            className="md:hidden bg-primary text-white px-4 py-2 rounded-full font-semibold text-sm"
          >
            Participer
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
