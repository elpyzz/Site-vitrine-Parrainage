import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Qui peut participer ?",
      answer: "Tout le monde ! Vous n'avez pas besoin d'être client ou professionnel. Il suffit de connaître un artisan du bâtiment."
    },
    {
      question: "Quels artisans sont concernés ?",
      answer: "Tous les métiers du bâtiment : électricien, plombier, maçon, peintre, carreleur, menuisier, couvreur, chauffagiste, etc."
    },
    {
      question: "Comment l'artisan est-il contacté ?",
      answer: "Nous le contactons directement pour lui présenter le logiciel. Il bénéficie de 2 semaines d'essai gratuit sans engagement."
    },
    {
      question: "Quand est-ce que je reçois ma prime ?",
      answer: "Vous recevez 300€ par virement bancaire sous 72h après que l'artisan a validé son inscription (après sa période d'essai)."
    },
    {
      question: "Y a-t-il une limite de parrainages ?",
      answer: "Non ! Vous pouvez parrainer autant d'artisans que vous le souhaitez. Chaque inscription validée = 300€."
    },
    {
      question: "Que se passe-t-il si l'artisan n'est pas convaincu ?",
      answer: "Rien du tout. L'essai est gratuit et sans engagement. Vous ne recevez la prime que si l'artisan décide de continuer."
    }
  ]

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-background-alt">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Questions fréquentes
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark">
            Tout ce que vous voulez savoir
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-text-dark pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-primary flex-shrink-0" size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
