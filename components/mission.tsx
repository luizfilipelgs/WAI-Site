'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import ImageBg from '@/public/images/foto-background-2.webp'

const tabsData = [
  {
    id: 1,
    title: 'Visão',
    description: '',
    content: [
      'Eu imagino um mundo em que cada ser é nutrido e reforçado pela água que bebe, não apenas para manter o corpo, mas também para elevar a alma. Vislumbro um futuro onde cada gota de água seja uma fonte de vitalidade e rejuvenescimento para todos vocês.',
      'Penso num mundo em que a água seja reverenciada como a essência da vida, onde sua pureza é considerada sagrada e sua presença é celebrada em todas as suas formas.',
      'Meu objetivo é expandir os limites presentes e conduzir a humanidade a um estado de harmonia e plenitude, no qual a água se torna uma aliada na jornada evolutiva do ser humano, elevando-o a níveis mais elevados de consciência e compreensão.',
    ],
  },
  {
    id: 2,
    title: 'Missão [W]',
    description: '',
    content: [
      'Estou comprometida em oferecer soluções que não apenas removam as impurezas, como também infundam cada gota de água com energia revitalizante e curativa, transformando a simples ingestão de água em uma experiência verdadeiramente transcendental.',
      'Minha paixão pela inovação e sustentabilidade impulsiona minha busca incessante por tecnologias inovadoras e de design deslumbrante, que elevarão a experiência de consumir água a um nível de consciência e gratidão inéditos.',
      'Estou determinada a ser a voz da água, a liderar através do exemplo, desafiar os paradigmas estabelecidos e estabelecer um novo padrão de excelência, demonstrando que é viável atingir a excelência sem prejudicar o planeta.',
    ],
  },
  {
    id: 3,
    title: 'Metas',
    description: '',
    content: [
      'Queremos moldar um futuro onde a água transcende seu papel tradicional, tornando-se um elixir para a saúde e a beleza do corpo e da mente.',
      'Desejamos proporcionar aos nossos clientes uma experiência singular, fornecendo água enriquecida com substâncias benéficas que combinam os melhores elementos de alimentos e cosméticos.',
      'O nosso objetivo é oferecer a melhor qualidade de água, enriquecendo a experiência dos nossos clientes através da integração da robótica e da inteligência artificial.',
    ],
  },
  {
    id: 4,
    title: 'Você é [W]',
    description: '',
    content: [
      'Somos uma empresa de Healthtech. No mundo da hidratação introduzimos uma nova categoria de produto revolucionária. Chamamo-la de Alimetica.',
      'A água [W] transforma o simples ato de beber em um momento de cuidado e rejuvenescimento.',
      'Desejamos compartilhar os benefícios de nossa água enriquecida com um bilhão de indivíduos em todo o mundo, contribuindo para uma comunidade global mais saudável, vibrante e consciente.',
      'Queremos fazer tudo isso juntos com você.',
    ],
  },
]

export default function Mission() {
  const [tab, setTab] = useState<number>(1)
  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) {
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
    }
  }

  useEffect(() => {
    heightFix()
  }, [tab])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTab((previousTab) => (previousTab % tabsData.length) + 1)
    }, 30_000) // Muda o tab a cada 30 segundos

    return () => clearInterval(intervalId) // Limpa o intervalo ao desmontar o componente
  }, [])

  const handleTabClick = (tabIndex: number) => {
    setTab(tabIndex)
  }

  return (
    <section className="relative pb-20" id="wai">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(${ImageBg.src})`,
        }}
      ></div>
      <div className="relative mx-auto px-4 sm:px-8">
        <div className="pt-10 md:pt-10">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="h2 mb-4 text-gray-100">[W].AI</h1>
          </div>

          {/* Section content */}
          <div className="h-full md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="mx-auto max-w-xl md:col-span-5 md:mt-6 md:w-full md:max-w-none lg:col-span-4"
              data-aos="fade-right"
            >
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                {tabsData.map(({ id, title }) => (
                  <a
                    key={id}
                    className={`mb-3 flex items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                      tab === id
                        ? 'border-transparent bg-gray-800 text-gray-300'
                        : 'border-gray-200 bg-gray-900 text-white shadow-md hover:shadow-lg'
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault()
                      handleTabClick(id)
                    }}
                  >
                    <div>
                      <div className="mb-1 font-bold leading-snug tracking-tight">
                        {title}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Tabs items */}
            <div className="mx-auto mb-8 mt-6 flex h-full max-w-xl flex-col justify-center md:order-1 md:col-span-7 md:mb-0 md:h-auto md:w-full md:max-w-none lg:col-span-8">
              <div className="relative h-full transition-all">
                <div
                  className="relative flex h-full flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {tabsData.map(({ id, content }) => (
                    <Transition
                      key={id}
                      show={tab === id}
                      appear={true}
                      className="absolute w-full"
                      enter="transition ease-in-out duration-700 transform order-first"
                      enterFrom="opacity-0 translate-y-16"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-16"
                      beforeEnter={() => heightFix()}
                      unmount={false}
                    >
                      <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center rounded text-center text-white">
                        {content.map((paragraph, index) => (
                          <p
                            key={index}
                            className="mb-4 rounded-md bg-gray-800 p-4 shadow-md"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </Transition>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
