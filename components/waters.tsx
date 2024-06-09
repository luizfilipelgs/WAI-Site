import Image from 'next/image'
import Image01 from '@/public/images/jasmine-mobile.webp'
import Image02 from '@/public/images/namiko-mobile.webp'
import Image03 from '@/public/images/salome-mobile.webp'
import Image04 from '@/public/images/crystal-mobile.webp'
import Image05 from '@/public/images/zafira-mobile.webp'
import ImageBg from '@/public/images/foto-background-2.webp'

const features = [
  {
    id: 1,
    image: Image01,
    title: 'Sabor Laranja',
    heading: 'Jasmine',
    description:
      'Sou Jasmine a água mais poderosa que você já teve, enriquecida com uma mistura explosiva de colágeno e queratina ao gosto de Laranja. Estou aqui para promover a transformação da sua saúde e beleza.',
    points: [
      'Brilho Deslumbrante da Pele',
      'Fortalecimento de Cabelos e Unhas',
      'Saúde das Articulações',
    ],
    alt: 'Features 01',
    aosImage: 'fade-up',
    aosContent: 'fade-right',
    colorTitle: 'text-orange-500',
  },
  {
    id: 2,
    image: Image02,
    title: 'Sabor Morango',
    heading: 'Namiko',
    description:
      'Sou Namiko a água impulsionada por uma equilibrada mistura de Vitaminas B3, B5, B6 e B12 ao gosto de Morango. Estou aqui para assegurar que você viva ao máximo e sem limites, em um estado de saúde e bem-estar perfeito.',
    points: [
      'Energia Turbo',
      'Equilíbrio Emocional Supremo',
      'Coração Invencível',
    ],
    alt: 'Features 02',
    aosImage: 'fade-up',
    aosContent: 'fade-left',
    colorTitle: 'text-red-500',
  },
  {
    id: 3,
    image: Image03,
    title: 'Sabor Coco',
    heading: 'Salomé',
    description:
      'Sou Salomé a água enriquecida com a poderosa combinação de cafeína e taurina ao gosto de Coco. Sou a fonte definitiva de energia e vitalidade para revolucionar seu corpo e mente.',
    points: ['Energia Instantânea', 'Foco Laser', 'Resiliência Incansável'],
    alt: 'Features 03',
    aosImage: 'fade-up',
    aosContent: 'fade-right',
    colorTitle: 'text-purple-500',
  },
  {
    id: 4,
    image: Image04,
    title: 'Sabor Hortelã',
    heading: 'Crystal',
    description:
      'Sou água enriquecida com a poderosa combinação de Magnésio, Selênio e Zinco ao gosto de Hortelã.',
    points: [
      'Função Cognitiva Aumentada',
      'Memória e Aprendizagem Fortalecidas',
      'Proteção Neuronal Total',
    ],
    alt: 'Features 04',
    aosImage: 'fade-up',
    aosContent: 'fade-left',
    colorTitle: 'text-teal-500',
  },
  {
    id: 5,
    image: Image05,
    title: 'Sabor Limão',
    heading: 'Zafira',
    description:
      'Sou Zafira a água enriquecida com o vibrante composto de Vitamina C ao gosto de Limão.',
    points: [
      'Defensora da Saúde',
      'Superescudo Antioxidante',
      'Coração Protegido',
    ],
    alt: 'Features 03',
    aosImage: 'fade-up',
    aosContent: 'fade-right',
    colorTitle: 'text-green-500',
  },
]

export default function Waters() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      id="#agua-w"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${ImageBg.src})`,
      }}
    >
      <div className="neon-line"></div>
      <div className="mx-auto px-4 sm:px-20">
        <div className="border-gray-800 py-12 md:py-12">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            {/* <div className="m-2 mb-4 inline-flex rounded-full bg-green-200 px-3 py-1 text-sm font-semibold text-green-600">
              Reach goals that matter
            </div> */}
            <h1 className="mb-4 text-3xl font-bold" id="agua-w">
              Água [W]
            </h1>
            {/* <p className="text-xl text-gray-200">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
            </p> */}
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="items-center md:grid md:grid-cols-12 md:gap-6"
                id={feature.heading}
              >
                {/* Image */}
                <div
                  className={`mx-auto mb-8 max-w-xl ${index % 2 === 0 ? 'md:order-1' : 'rtl'} md:col-span-5 md:mb-0 md:w-full md:max-w-none lg:col-span-6`}
                  data-aos={feature.aosImage}
                >
                  <Image
                    className="mx-auto h-auto max-w-full md:max-w-none"
                    src={feature.image}
                    height={550}
                    alt={feature.alt}
                  />
                </div>
                {/* Content */}
                <div
                  className="mx-auto max-w-xl md:col-span-7 md:w-full md:max-w-none lg:col-span-6"
                  data-aos={feature.aosContent}
                >
                  <div
                    className={`${index % 2 === 0 ? 'md:pr-4 lg:pr-12 xl:pr-16' : 'md:pl-4 lg:pl-12 xl:pl-16'}`}
                  >
                    <div
                      className={`font-architects-daughter mb-2 text-xl ${feature.colorTitle}`}
                    >
                      {feature.title}
                    </div>
                    <h3 className={`h3 mb-3 ${feature.colorTitle}`}>
                      {feature.heading}
                    </h3>
                    <p className="mb-4 text-justify text-xl text-gray-200">
                      {feature.description}
                    </p>
                    <ul className="-mb-2 text-lg text-gray-200">
                      {feature.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="mb-2 flex items-center">
                          <svg
                            className={`mr-2 h-3 w-3 shrink-0 fill-current ${feature.colorTitle}`}
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
