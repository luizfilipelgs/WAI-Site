import image1 from '@/public/images/foto-garrafa-5.webp'
import image2 from '@/public/images/foto-app-5.webp'

export function Bootle() {
  return (
    <>
      <div className="neon-line"></div>
      <div className="w-full overflow-auto">
        <div
          className="flex w-full items-center text-sm justify-end bg-cover bg-center m-0"
          style={{
            backgroundImage: `url(${image1.src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '60vh',
          }}
        >
          <div className="flex w-full items-center justify-between bg-opacity-0 text-center">
            <div className="ml-16 w-1/4 px-4 text-left" data-aos="fade-left">
              <h1 className="mb-4 text-3xl font-bold">Smart [W]</h1>
              <ul className="list-disc">
                <li>Aço inoxidável em dupla camada.</li>
                <li>
                  Temperatura fria ou quente mantida por aproximadamente 12
                  horas.
                </li>
                <li>Tampa com sensor de Temperatura digital.</li>
                <li>O tempo de vida útil da bateria é de um ano e meio.</li>
                <li>Capacidade máxima de 440 ml.</li>
              </ul>
            </div>
            <div
              className="mr-10 w-1/4 bg-black px-4 text-left"
              data-aos="fade-right"
            >
              <h1 className="mb-4 text-2xl font-bold">
                Esterilização Avançada:
              </h1>
              <p>
                Não aceite menos que o melhor para sua hidratação. Com a Oracle
                [W], a pureza é redefinida através da esterilização da garrafa a
                cada uso, assegurando uma experiência de consumo impecável em
                termos de qualidade e higiene.
              </p>
            </div>
          </div>
        </div>

        <div className="neon-line"></div>
        <div
          className="justify-right flex w-full flex-row items-center bg-cover"
          style={{
            backgroundImage: `url(${image2.src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '60vh',
          }}
        >
          <div className="flex w-full flex-col text-sm items-left justify-start p-4 text-left">
            <div className="ml-10 px-4 text-left w-1/3" data-aos="fade-right">
              <h1 className="mb-0 text-2xl font-bold">Faça sua Smart [W]:</h1>
              <p>
                Com apenas alguns toques na tela do seu dispositivo, você pode
                solicitar sua garrafa de água definitiva: a Smart [W].
              </p>
            </div>
            <div className="ml-10 mt-5 px-4 text-left w-1/3" data-aos="fade-right">
              <h1 className="mb-0 text-2xl font-bold">
                Versatilidade Cativante:
              </h1>
              <p>
                A Oracle [W] é uma garrafa de água que combina estilo e funcionalidade
                com seu design minimalista e opções de cores variadas. Além de sofisticada,
                oferece um sistema de esterilização avançado para garantir higiene
                e qualidade a cada uso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
