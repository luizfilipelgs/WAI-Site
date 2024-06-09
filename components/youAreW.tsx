import Image from 'next/image'
import Image01 from '@/public/images/voce-e-businees-mobile.webp'
import Image02 from '@/public/images/voce-e-sport-mobile.webp'
import Image03 from '@/public/images/voce-e-senior-mobile.webp'
import Image04 from '@/public/images/crystal-mobile.webp'
import Image05 from '@/public/images/voce-e-genW-mobile.webp'
import Image06 from '@/public/images/criança-mobile.webp'
import ImageBg from '@/public/images/foto-background-2.webp'

const features = [
  {
    id: 1,
    image: Image01,
    title: '',
    heading: 'Business',
    description:
      'Você é uma pessoa altamente competente, focada e determinada, que exerce liderança com integridade e visão estratégica. Você é reconhecida por suas conquistas, habilidades de networking e capacidade de tomar decisões assertivas. Seu estilo de vida é um equilíbrio entre o trabalho, o desenvolvimento pessoal, tornando-se uma fonte de inspiração e referência no mundo corporativo. Você valoriza a criatividade e a inovação.',
    points: [],
    alt: 'Features 01',
    aosImage: 'fade-up',
    aosContent: 'fade-right',
    colorTitle: 'text-blue-600',
  },
  {
    id: 2,
    image: Image02,
    title: '',
    heading: 'Sport',
    description:
      'Você é ativo e dedicado à prática esportiva. Você se dedica a atividades físicas regulares, como musculação, corrida, ciclismo e treinamento funcional. Participa de competições esportivas e maratonas na sua cidade.',
    points: [],
    alt: 'Features 02',
    aosImage: 'fade-up',
    aosContent: 'fade-left',
    colorTitle: 'text-green-500',
  },
  {
    id: 3,
    image: Image03,
    title: '',
    heading: 'Senior',
    description:
      'Você é um exemplo inspirador de uma pessoa que se dedica à saúde e ao bem-estar. Você adota hábitos saudáveis, pratica atividades físicas adaptadas, cuida da saúde mental e emocional, e mantém um engajamento social e comunitário ativo. Sua abordagem equilibrada e comprometida reflete o desejo de envelhecer com saúde, autonomia, qualidade de vida e plenitude.',
    points: [],
    alt: 'Features 03',
    aosImage: 'fade-up',
    aosContent: 'fade-right',
    colorTitle: 'text-gray-400',
  },
  {
    id: 4,
    image: Image04,
    title: '',
    heading: 'Glamour',
    description:
      'Você é um ícone de elegância, luxo e charme. Você leva uma vida deslumbrante, mas também equilibrada, dando importância à excelência, ao bem-estar e ao desenvolvimento pessoal. Seu estilo de vida e presença marcante despertam admiração e, geralmente, são associados a um alto nível de sucesso e realização pessoal.',
    points: [],
    alt: 'Features 04',
    aosImage: 'fade-up',
    aosContent: 'fade-left',
    colorTitle: 'text-red-500',
  },
  {
    id: 5,
    image: Image05,
    title: '',
    heading: 'Gen [W]',
    description:
      'Você faz parte de uma geração diversificada, hiper-dinâmica e hiper-conectada, que valoriza a tecnologia, a sustentabilidade e as experiências disruptivas. Você está modificando os padrões sociais, comportamentais e culturais, influenciando significativamente o mercado de trabalho, o consumo, a tecnologia e a maneira como as pessoas interagem e se relacionam com o mundo ao seu redor. Você está vinculado ao futuro.',
    points: [],
    alt: 'Features 03',
    aosImage: 'fade-up',
    aosContent: 'fade-right',
    colorTitle: 'text-indigo-500',
  },
  {
    id: 6,
    image: Image06,
    title: '',
    heading: 'Crianças',
    description:
      'Você é ativo, curioso e cheio de energia, adora brincar ao ar livre, praticar esportes e explorar o mundo com amigos e familiares. Você gosta de fazer amigos na escola, jogar em grupo e se divertir com os amigos e companheiros. Você gosta de descobrir coisas interessantes e que te deixam curioso.',
    points: [],
    alt: 'Features 03',
    aosImage: 'fade-up',
    aosContent: 'fade-right',
    colorTitle: 'text-yellow-500',
  },
]

export default function YouAreW() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      id="voce-e-w"
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
            <h1 className="mb-4 text-3xl font-bold">Água [W]</h1>
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
