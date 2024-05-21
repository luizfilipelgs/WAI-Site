import image1 from '@/public/images/foto-app-1.webp'
import image2 from '@/public/images/foto-app-4.webp'
import image3 from '@/public/images/foto-app-3.webp'

export function Aplicativo() {
  return (
    <>
      <div className="neon-line"></div>
      <div className="w-full overflow-auto">
        <div
          className="flex w-full items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${image1.src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '60vh',
          }}
        >
          <div className="flex w-full items-center justify-between text-center">
            <div className="ml-40 w-1/4 px-4 text-left" data-aos="fade-left">
              <h1 className="mb-4 text-3xl font-bold">App [W]</h1>
              <p>
                Nosso aplicativo oferece uma experiência de interação completa
                com a Oracle [W], colocando o controle total da hidratação na
                palma de suas mãos. Com o aplicativo [W], a hidratação
                ultrapassa a simples necessidade e se torna uma jornada de
                prazer e saúde personalizada.
              </p>
            </div>
          </div>
        </div>

        <div className="neon-line"></div>
        <div
          className="flex w-full items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${image2.src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '60vh',
          }}
        >
          <div className="flex w-full items-center justify-end p-4 text-center">
            <div className="mr-48 w-1/4 px-4 text-left" data-aos="fade-right">
              <span className="mb-2 block font-bold">
                Customização Intuitiva:
              </span>
              <p>
                Explore uma variedade de opções de água premium e adapte-as de
                acordo com o seu gosto pessoal. O aplicativo Oracle [W] permite
                selecionar ingredientes, proporções e intensidades para uma
                combinação perfeita que atende às suas necessidades de
                hidratação.
              </p>
            </div>
          </div>
        </div>
        <div className="neon-line"></div>
        <div
          className="flex w-full items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${image3.src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '60vh',
          }}
        >
          <div className="flex w-full items-center justify-start p-4 text-center">
            <div className="ml-40 w-1/4 px-4 text-left" data-aos="fade-right">
              <span className="mb-2 block font-bold">
                Interatividade Absoluta:
              </span>
              <p>
                Seu telefone é o portal de acesso para todas as funcionalidades
                da Oracle [W], proporcionando uma conexão perfeita e intuitiva
                com sua fonte de água personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="neon-line"></div>
    </>
  )
}
