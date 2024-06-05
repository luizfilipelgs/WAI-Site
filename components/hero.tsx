// components/FullWidthBackgrounds.js
import image1 from '@/public/images/foto-w.1.webp'
import image2 from '@/public/images/crystal-photo.webp'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="w-full overflow-auto" id="wai">
      <div
        className="flex w-full items-center justify-end bg-cover bg-center bg-no-repeat md:h-[80vh]"
        style={{
          backgroundImage: `url(${image1.src})`,
        }}
      >
        <div className="m-0 w-1/4 p-0 text-left" data-aos="fade-right">
          <h1 className="text-4xl font-semibold">Oracle [W]</h1>
          <h2 className="text-xl">A água encontra a I.A.</h2>
          <Link href="#">
            <p className="text-l cursor-pointer font-bold text-blue-500 hover:text-blue-800">
              Saiba mais
            </p>
          </Link>
        </div>
      </div>
      <div className="neon-line"></div>
      <div
        className="flex w-full items-center justify-center bg-cover bg-center bg-no-repeat md:h-[50vh]"
        style={{
          backgroundImage: `url(${image2.src})`,
        }}
      >
        <div className="items-left ml-10 flex w-full flex-col justify-start p-4 text-center text-black">
          <h1
            className="px-4 text-left text-4xl font-medium"
            data-aos="fade-left"
          >
            [W].AI
          </h1>
          <div className="w-1/4">
            <p className="px-4 text-left text-xl" data-aos="fade-left">
              Água alimetica.
            </p>
            <p className="px-4 text-left text-xl" data-aos="fade-left">
              Saúde e beleza para seu corpo, mente e alma.
            </p>
            <Link href="#">
              <p className="cursor-pointer px-4 text-left text-xl font-bold text-red-500 hover:text-red-800">
                Saiba mais
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="neon-line"></div>
    </div>
  )
}
