'use client'

import { useState } from 'react'

const faqData = [
  {
    question: 'O que é a água [W]?',
    answer:
      'A água [W] é uma nova categoria de produto revolucionária chamada Alimetica, que transforma o simples ato de beber água em um momento de cuidado e rejuvenescimento.',
  },
  {
    question: 'Quais são os benefícios da água [W]?',
    answer:
      'Nossa água enriquecida proporciona saúde e beleza para o corpo, mente e alma, combinando os melhores elementos de alimentos e cosméticos.',
  },
  {
    question: 'Como a água [W] é diferente das outras águas?',
    answer:
      'A água [W] é infundida com substâncias benéficas que a tornam um elixir para a saúde e a beleza, elevando a experiência de consumir água a um nível de consciência e gratidão inéditos.',
  },
]

export default function ContactFAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <section className="mx-auto max-w-6xl p-5">
      <h2 className="mb-6 text-center text-3xl font-semibold text-gray-100">
        Contato e FAQ
      </h2>
      <div className="mt-20 md:grid md:grid-cols-2 md:gap-8">
        {/* Contato */}
        <div className="mb-8 md:mb-0">
          <h3 className="mb-4 text-2xl font-semibold text-gray-100">Contato</h3>
          <ul className="text-gray-400">
            <li className="mb-4">
              <a
                href="mailto:email@dominio.com"
                className="flex items-center rounded-lg bg-gray-800 p-4 font-semibold text-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="mr-2 h-6 w-6 fill-current text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12.713l11.985-6.713v13.287c0 1.104-.896 2-2 2h-19.97c-1.104 0-2-.896-2-2v-13.287l11.985 6.713zm0-1.426l-12-6.764v-1.523c0-1.104.896-2 2-2h19.97c1.104 0 2 .896 2 2v1.523l-12 6.764z" />
                </svg>
                <span>email@dominio.com</span>
              </a>
            </li>

            <li className="mb-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-lg bg-gray-800 p-4 font-semibold text-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="mr-2 h-6 w-6 fill-current text-gray-300"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.063 9l3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063zM12.323 10.347H10.866l8.875 11.232h1.36l-8.778-11.232z" />
                </svg>
                <span>Twitter</span>
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-lg bg-gray-800 p-4 font-semibold text-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="mr-2 h-6 w-6 fill-current text-gray-300"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.145" cy="11.892" r="1" />
                  <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                  <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                </svg>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        {/* FAQ */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-gray-100">FAQ</h3>
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full rounded-lg bg-gray-800 p-4 text-left font-semibold text-gray-300 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="rounded-b-lg bg-gray-700 p-4 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
