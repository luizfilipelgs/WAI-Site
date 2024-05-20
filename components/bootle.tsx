import image1 from '../public/images/bootle-image-cellphone.webp'
import image2 from '../public/images/bootle-image-cellphone.webp'
    
export function Bootle() {
  return (
    <>
      <div className="neon-line"></div>
      <div className="w-full overflow-auto">
        <div className="flex h-screen w-full items-center justify-center bg-cover bg-center">
          <div className="flex w-full items-center justify-between text-center">
            <div className="ml-10 w-1/4 px-4 text-left" data-aos="fade-left">
              <h1 className="mb-4 text-3xl font-bold">Smart [W]</h1>
              <ul className="list-disc"> 
                <li>Aço inoxidável em dupla camada.</li>
                <li>Temperatura fria ou quente mantida por aproximadamente 12 horas.</li>
                <li>Tampa com sensor de Temperatura digital.</li>
                <li>O tempo de vida útil da bateria é de um ano e meio.</li>
                <li>Capacidade máxima de 440 ml.</li>
              </ul>
            </div>
            <div
                className="h-3/4 w-2/4 bg-contain bg-no-repeat bg-center"
                style={{
                backgroundImage: `url(${image1})`,
                backgroundPosition: '30%',
                }}
            >
            </div>
            <div
              className="mr-10 w-1/4 bg-black bg-opacity-50 px-4 text-left"
              data-aos="fade-right"
            >
                <h1 className="mb-4 text-3xl font-bold">Esterilização Avançada:</h1>
                <p> Não aceite menos que o melhor para sua hidratação. Com a Oracle [W], a pureza é redefinida através da esterilização da garrafa a cada uso, assegurando uma experiência de consumo impecável em termos de qualidade e higiene.
              </p>
            </div>
          </div>
        </div>

        <div className="neon-line"></div>
        <div className="flex h-screen w-full items-center justify-right bg-cover flex flex-row">
          <div className="flex w-full items-center justify-start p-4 text-center flex flex-col">
            <div className="ml-10 px-4 text-left" data-aos="fade-right">
              <h1 className="mb-4 text-2xl font-bold mb-0">
                Faça sua Smart [W]:
              </h1>
              <p>
                Com apenas alguns toques na tela do seu dispositivo, você pode solicitar sua garrafa de água definitiva: a Smart [W].
              </p>
            </div>
            <div className="ml-10 px-4 text-left mt-5" data-aos="fade-right">
              <h1 className="text-2xl font-bold mb-0">
                Versatilidade Cativante:
              </h1>
              <p>
                A Smart [W] está disponível em uma variedade de cores para combinar com o seu estilo e personalidade ao manter-se hidratado com classe.
              </p>
             </div>
          </div>
          <div
            className="h-full w-screen bg-cover"
            style={{
                backgroundImage: `url(${image2})`,
                backgroundPosition: '40%',
            }}
            />
        </div>
      </div>
      <div className="neon-line"></div>
    </>
  )
}
