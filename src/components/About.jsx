import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart } from 'lucide-react'
const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description:
        'Fornecer soluções de consultoria inovadoras que impulsionam o crescimento sustentável e a excelência operacional dos nossos clientes.',
    },
    {
      icon: Eye,
      title: 'Visão',
      description:
        'Ser reconhecida como a consultoria de referência em gestão empresarial, ambiental e desenvolvimento de capital humano.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description:
        'Integridade, excelência, inovação, sustentabilidade e compromisso com o sucesso dos nossos clientes.',
    },
  ]
  return (
    <section id="sobre" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Quem Somos
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Mais do que uma empresa de consultoria, a BMC Pro Services é um hub
            de gestão e serviços empresariais que combina experiência, inovação
            e visão estratégica. Apoiamos empresas, instituições e governos a
            alcançarem resultados sólidos, duradouros e transformadores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <motion.div
                whileHover={{
                  rotate: 360,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto"
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-center text-blue-400">
                {value.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default About
