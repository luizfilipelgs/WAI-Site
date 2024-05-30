// components/FullWidthBackgrounds.js
import image1 from '@/public/images/foto-w.1.webp'
import image2 from '@/public/images/crystal-photo.webp'

export default function TesteImg() {
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: `url(${image1.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          
          height: '60vh', // Define a altura mínima da div
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${image2.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          
          height: '60vh', // Define a altura mínima da div
        }}
      ></div>
    </div>
  )
}
