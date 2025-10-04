import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Bob Cabey',
    company: 'CEO, Transdata Consult',
    country: 'South Africa',
    quote:
      'A parceria com a BMC Pro Services foi um divisor de águas. A sua visão estratégica e expertise em otimização de processos transformaram a nossa operação. Eles não entregam apenas consultoria, entregam resultados exponenciais. Brilhante!',
    avatar: 'A man in a suit smiling confidently in an office setting',
  },
  {
    name: 'Sofia Alves',
    company: 'Diretora de Inovação, Tech Solutions',
    country: 'Moçambique',
    quote:
      'A equipa da BMC é excecional! Eles mergulharam na nossa cultura, entenderam os nossos desafios e guiaram-nos na jornada de transformação digital com uma mestria impressionante. Recomendo vivamente!',
    avatar: 'A woman with glasses smiling in a modern tech office',
  },
  {
    name: 'Carlos Ferreira',
    company: 'Gestor de Sustentabilidade, Eco-Indústria',
    country: 'Moçambique',
    quote:
      'Graças à BMC, implementámos práticas de sustentabilidade que não só reduziram o nosso impacto ambiental como também melhoraram a nossa rentabilidade. São verdadeiros pioneiros na consultoria ambiental.',
    avatar: 'A man in a casual shirt outdoors with a green background',
  },
]

const Testimonials = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section
      id="feedbacks"
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-950 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            O Que Dizem Sobre Nós
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Feedbacks de clientes e parceiros que confiam na nossa excelência e
            impacto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <Quote className="w-12 h-12 text-blue-500 mb-6" />
              <p className="text-gray-300 italic flex-grow mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-auto pt-6 border-t border-slate-800">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-slate-700">
                  <img
                    className="w-full h-full object-cover"
                    alt={testimonial.avatar}
                    src="https://images.unsplash.com/photo-1649399045831-40bfde3ef21d"
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonial.company}, {testimonial.country}
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
