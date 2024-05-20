// components/FullWidthBackgrounds.js
import image1 from '@/public/images/foto-w.1.webp'
import image2 from '@/public/images/foto-w1.5.webp'
import image3 from '@/public/images/foto-w2.5.webp'

export function Oracle() {
  return (
    <>
      <div className="neon-line"></div>
      <div className="w-full overflow-auto">
        <div
          className="flex h-screen w-full items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${image1.src})` }}
        >
          <div className="flex w-full items-center justify-around p-4 text-center">
            <p className="w-1/4 px-4 text-left" data-aos="fade-left">
              Oracle [W] é uma mini-estação programável que representa um avanço
              significativo na purificação de água, tornando-a um elemento
              indispensável para a nutrição funcional.
            </p>
            <p className="w-1/4 px-4 text-left" data-aos="fade-right">
              Oracle [W] possibilita a personalização da composição da água,
              incluindo ajustes de sabor, tipos de minerais, pH e textura,
              proporcionando uma experiência de hidratação adequada às
              preferências individuais do usuário.
            </p>
          </div>
        </div>
        <div className="neon-line"></div>
        <div
          className="flex h-screen w-full items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${image2.src})`,
            backgroundPosition: '70%', // Ajusta para mais à esquerda
          }}
        >
          <div className="flex w-full items-center justify-start p-4 text-center">
            <p className="ml-48 w-1/4 px-4 text-left" data-aos="fade-left">
              Oracle [W] representa um avanço significativo na purificação de
              água, oferecendo um sistema que remove todas as impurezas físicas,
              químicas e biológicas.
            </p>
          </div>
        </div>
        <div className="neon-line"></div>
        <div
          className="flex h-screen w-full items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${image3.src})` }}
        >
          <div className="flex w-full items-center justify-start p-4 text-center">
            <p className="ml-48 w-1/4 px-4 text-left" data-aos="fade-left">
              A seleção e a configuração das preferências da água são facilmente
              realizadas por meio de um aplicativo móvel intuitivo e de fácil
              utilização.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
