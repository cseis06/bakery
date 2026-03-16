import Hero from '@/components/sections/Hero'
import SobreNosotros from '@/components/sections/About'
import Productos from '@/components/sections/Products'
import Testimonios from '@/components/sections/Testimonials'
import Video from '@/components/sections/Video'
import Contacto from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <SobreNosotros />
      <Productos />
      <Testimonios />
      <Video />
      <Contacto />
    </>
  )
}