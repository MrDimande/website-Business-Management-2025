import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const GrupoBMC = () => {
  const [selectedCompany, setSelectedCompany] = useState(null)

  const companies = [
    {
      name: 'BrainyWrite',
      description: 'Soluções de conteúdo criativo e copywriting profissional',
      gradient: 'from-purple-500 to-pink-500',
      details: {
        description:
          'A BrainyWrite é especializada em produção de conteúdo estratégico para marcas que desejam comunicar com impacto e autenticidade.',
        points: [
          'Copywriting para campanhas publicitárias',
          'Criação de artigos, blogs e conteúdos SEO',
          'Gestão de conteúdos para redes sociais',
          'Edição e revisão profissional de textos',
          'Desenvolvimento de roteiros criativos',
        ],
      },
    },
    {
      name: 'Peculiar Eventos',
      description:
        'Organização de eventos corporativos e experiências memoráveis',
      gradient: 'from-blue-500 to-cyan-500',
      details: {
        description:
          'Planeamos e executamos eventos personalizados que proporcionam experiências inesquecíveis para empresas e clientes.',
        points: [
          'Eventos corporativos e institucionais',
          'Feiras e exposições',
          'Workshops e conferências',
          'Lançamento de produtos',
          'Eventos culturais e sociais',
        ],
      },
    },
    {
      name: 'Agência Criativa 360º',
      description: 'Marketing digital, branding e estratégias de comunicação',
      gradient: 'from-orange-500 to-red-500',
      details: {
        description:
          'Oferecemos soluções integradas de marketing e comunicação para posicionar a sua marca no mercado de forma diferenciada.',
        points: [
          'Estratégias de marketing digital',
          'Gestão de redes sociais',
          'Campanhas publicitárias integradas',
          'Branding e posicionamento de marca',
          'Gestão de reputação online',
        ],
      },
    },
    {
      name: 'Artes Lunica',
      description: 'Design gráfico, identidade visual e soluções criativas',
      gradient: 'from-green-500 to-teal-500',
      details: {
        description:
          'Criamos identidades visuais impactantes e design criativo para fortalecer a presença da sua marca.',
        points: [
          'Criação de logótipos e identidade visual',
          'Design gráfico para impressos e digitais',
          'Produção de materiais promocionais',
          'Design editorial e packaging',
          'Consultoria criativa e artística',
        ],
      },
    },
  ]

  return (
    <section id="grupo" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Grupo BMC
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Um ecossistema de empresas especializadas trabalhando em sinergia
            para oferecer soluções completas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.08, y: -10 }}
              onClick={() => setSelectedCompany(company)}
              className="cursor-pointer group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`}
              />

              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 group-hover:border-transparent transition-all duration-300 h-full flex flex-col justify-between min-h-[200px]">
                <div>
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${company.gradient} rounded-lg mb-4 flex items-center justify-center`}
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                    {company.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {company.description}
                  </p>
                </div>

                <motion.div
                  className="mt-4 flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  Saiba mais
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal com detalhes */}
      <Dialog
        open={!!selectedCompany}
        onOpenChange={() => setSelectedCompany(null)}
      >
        {selectedCompany && (
          <DialogContent className="max-w-2xl bg-slate-900/90 backdrop-blur-lg border-slate-700 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4">
                {selectedCompany.name}
              </DialogTitle>
              <DialogDescription className="text-gray-300 text-base">
                {selectedCompany.details.description}
              </DialogDescription>
            </DialogHeader>
            <div className="my-6">
              <h4 className="font-semibold text-lg mb-4 text-blue-400">
                Principais serviços:
              </h4>
              <ul className="space-y-3">
                {selectedCompany.details.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end space-x-4">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="text-gray-300 border-slate-600 hover:bg-slate-800 hover:text-white"
                >
                  Fechar
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}

export default GrupoBMC
