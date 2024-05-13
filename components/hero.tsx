// components/FullWidthBackgrounds.js
import image1 from '@/public/images/foto-w.1.webp'
import image2 from '@/public/images/crystal-photo.webp'

export default function Hero() {
  return (
    <div className="w-full overflow-auto">
      <div
        className="flex h-screen w-full items-center justify-end bg-cover bg-center"
        style={{ backgroundImage: `url(${image1.src})` }}
      >
        <div className="m-0 w-1/4 p-0 text-left" data-aos="fade-right">
          <h1 className="text-5xl font-semibold">Oracle [W]</h1>
          <h2 className="text-2xl">A água encontra a I.A.</h2>
          <a
            href="#"
            className="text-2xl font-bold text-blue-500 hover:text-blue-800"
          >
            Saiba mais
          </a>
        </div>
      </div>
      <div className="neon-line"></div>
      <div
        className="flex h-screen w-full items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${image2.src})`,
          backgroundPosition: '10%',
        }}
      >
        <div className="items-left ml-20 flex w-full flex-col justify-start p-4 text-center text-black">
          <h1
            className="w-1/4 px-4 text-left text-5xl font-medium"
            data-aos="fade-left"
          >
            [W].AI
          </h1>
          <p className="w-1/5 px-4 text-left text-2xl" data-aos="fade-left">
            Água alimetica.
          </p>
          <p className="w-1/6 px-4 text-left text-2xl" data-aos="fade-left">
            Saúde e beleza para seu corpo, mente e alma.
          </p>
          <a
            href="#"
            className="w-1/6 px-4 text-left text-2xl font-bold text-red-500 hover:text-red-800"
          >
            Saiba mais
          </a>
        </div>
      </div>
      <div className="neon-line"></div>
    </div>
  )
}
