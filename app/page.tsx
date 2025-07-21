// Importando bibliotecas
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-[80vh] font-sans">
      {/* Header - Apresentação */}
      <header className="h-[50vh] flex flex-col justify-start items-center text-center pt-20">
        <motion.h1 
          className="text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>Bruno Rodrigues da Silva</span>
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Desenvolvedor Full Stack | Tech Lead
        </motion.p>
        <div className="mt-6 flex gap-4">
          <a href="#contato" className="bg-green-500 px-6 py-3 rounded-lg text-white">Contato</a>
          <a href="#projetos" className="bg-blue-500 px-6 py-3 rounded-lg text-white">Ver Projetos</a>
        </div>
      </header>
      
      {/* Layout Principal */}
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-3 gap-16 py-10">
        {/* Coluna Esquerda - 70% */}
        <div className="col-span-2 space-y-16">
          {/* Sobre */}
          <section id="sobre" className="text-center">
            <h2 className="text-4xl font-bold">Sobre Mim</h2>
            <p className="text-gray-400 mt-4">Desde jovem eu já demonstrava interesse por tecnologia e sempre gostei de criar aplicações automatizadas e complexas. Com 5 anos de experiência na área, já me encontro como desenvolvedor Full Stack, com especialidade em linguagem C#, SQL, framework Angular e js.

Quando não me encontro trabalhando, gosto de passar o tempo livre com amigos, imerso em jogos eletrônicos e explorando novas tecnologias..</p>
          </section>
          
          {/* Skills */}
          <section id="skills" className="text-center">
            <h2 className="text-4xl font-bold">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">JavaScript</h3>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">TypeScript</h3>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">React.js</h3>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">Next.js</h3>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">Node.js</h3>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">.NET</h3>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">SQL</h3>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">Docker</h3>
              </div>
            </div>
          </section>
          
          {/* Projetos */}
          <section id="projetos" className="text-center">
            <h2 className="text-4xl font-bold">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {/* Novo Projeto - Mapa Indoors */}
              <motion.div 
                className="bg-gray-800 p-4 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Image src="/projeto1.png" alt="Mapa Indoors" width={500} height={300} className="rounded" />
                <h3 className="text-2xl font-bold mt-4">Mapa Indoors</h3>
                <p className="text-gray-400">
                  Projeto de mapas internos (indoors) para navegação e localização em ambientes fechados. 
                  <br />
                  <a href="https://github.com/B010/MapaHtml" target="_blank" className="text-blue-400 underline">Ver no GitHub</a>
                </p>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Coluna Direita - 30% */}
        <div className="space-y-16">
          {/* Idiomas */}
          <section id="idiomas" className="text-center">
            <h2 className="text-4xl font-bold">Idiomas</h2>
            <div className="grid gap-6 mt-10">
              <div className="relative bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden">
                <Image src="/bandeiras/br.png" alt="Bandeira do Brasil" width={200} height={120} className="opacity-30 absolute top-0 left-0 w-full h-full object-cover" />
                <h3 className="text-2xl font-bold relative">Português</h3>
                <p className="text-gray-400 relative">Nativo</p>
              </div>
              <div className="relative bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden">
                <Image src="/bandeiras/uk.png" alt="Bandeira do Reino Unido" width={200} height={120} className="opacity-30 absolute top-0 left-0 w-full h-full object-cover" />
                <h3 className="text-2xl font-bold relative">Inglês</h3>
                <p className="text-gray-400 relative">B2 (Intermediário-Avançado)</p>
              </div>
              <div className="relative bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden">
                <Image src="/bandeiras/es.png" alt="Bandeira da Espanha" width={200} height={120} className="opacity-30 absolute top-0 left-0 w-full h-full object-cover" />
                <h3 className="text-2xl font-bold relative">Espanhol</h3>
                <p className="text-gray-400 relative">B1 (Intermediário)</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Contato */}
      <section id="contato" className="py-32 text-center bg-gray-800">
        <h2 className="text-4xl font-bold">Entre em Contato</h2>
        <p className="text-gray-400 mt-4">Me envie um e-mail ou me chame nas redes sociais!</p>
        <a href="mailto:bruno.rsilva002@email.com" className="bg-blue-500 px-6 py-3 rounded-lg mt-6 inline-block">Enviar Email</a>
      </section>
    </div>
  );
}
