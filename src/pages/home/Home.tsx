import ScrollReveal from '../../components/animation/ScrollReveal';
import Hero from '../../components/sections/hero/Hero';
import VideoBackground from '../../components/common/Video';
//import Contact from '../../components/sections/contact/Contact';
import BestSeller from '../../components/sections/bestSeller/BestSeller';
import Info from '../../components/sections/info/Info';
import Testimonials from '../../components/sections/testimonials/Testimonials';
import Catalog from '../../components/sections/catalog/Catalog';

const Home = () => {

  return (
    <div className='flex flex-col gap-20 bg-linear-90 from-red-950/15 via-amber-50 to-red-950/15'>
      <Hero />
      <BestSeller />
      <section className='h-[96dvh] flex flex-col justify-center items-center text-center gap-14'>
        <ScrollReveal direction="none" scale={0.5} duration={0.6} blur={20}>
          
          <span className='inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-red-950/50'>Una producción confiable, para lograr un sabor inigualable;</span>
          <h3 className='text-6xl font-extrabold text-red-900 text-center italic'>
            La técnica detrás del sabor
          </h3>
        </ScrollReveal>
        <VideoBackground />
      </section>
      <Catalog />
      {/*<Contact />*/}
      
      <Testimonials />
      <Info />
    </div>
  )
}

export default Home