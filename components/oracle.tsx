// components/FullWidthBackgrounds.js
import image1 from '@/public/images/foto-w.1.jpg'
import image2 from '@/public/images/foto-w1.5.jpg'
import image3 from '@/public/images/foto-w2.5.jpg'

export function Oracle() {
  return (
    <div className="w-full overflow-auto">
      <div
        className="flex h-screen w-full items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image1.src})` }}
      >
        <div className="flex w-full items-center justify-around p-4 text-center">
          <p className="w-1/4 px-4 text-left">
            ALOUUUUUUUU sgsisgosgousfgs sigsoisgssip hjsgsuyfgs kfsius kgsfisut
            sfisgfsousfsiusyfsiusfrs
          </p>
          <p className="w-1/4 px-4 text-left">
            ALOUUUUUUUU gsisgosgousfgs sigsoisgssip hjsgsuyfgs kfsius kgsfisut
            sfisgfsousfsiusyfsiusfrs
          </p>
        </div>
      </div>
      <div
        className="flex h-screen w-full items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${image2.src})`,
          backgroundPosition: '70%', // Ajusta para mais à esquerda
        }}
      >
        <div className="flex w-full items-center justify-start p-4 text-center">
          <p className="ml-48 w-1/4 px-4 text-left">
            ALOUUUUUUUU sgsisgosgousfgs sigsoisgssip hjsgsuyfgs kfsius kgsfisut
            sfisgfsousfsiusyfsiusfrs
          </p>
        </div>
      </div>
      <div
        className="flex h-screen w-full items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image3.src})` }}
      >
        <div className="flex w-full items-center justify-start p-4 text-center">
          <p className="ml-48 w-1/4 px-4 text-left">
            ALOUUUUUUUU sgsisgosgousfgs sigsoisgssip hjsgsuyfgs kfsius kgsfisut
            sfisgfsousfsiusyfsiusfrs
          </p>
        </div>
      </div>
    </div>
  )
}
