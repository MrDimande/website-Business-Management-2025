import React from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      description:
        'Projeto de consultoria estratégica para empresa tecnológica',
    },
    { id: 2, description: 'Implementação de sistema de gestão ambiental' },
    { id: 3, description: 'Programa de desenvolvimento de liderança' },
    {
      id: 4,
      description: 'Reestruturação organizacional e otimização de processos',
    },
    { id: 5, description: 'Consultoria em sustentabilidade empresarial' },
    { id: 6, description: 'Formação avançada em gestão de equipas' },
  ]

  return (
    <section
      id="portfolio"
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Projetos & Experiência
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Casos de sucesso que demonstram o nosso compromisso com a excelência
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Projeto {project.id}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
