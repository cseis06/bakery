import React from 'react';
import ScrollReveal from '../../components/animation/ScrollReveal';
import Hero from '../../components/hero/Hero';
import ProductCard from '../../components/common/ProductCard';
import VideoBackground from '../../components/Video';
import Contact from '../../components/contact/Contact';
import PanettoneNoBg from "../../assets/img/products/panettone-nobg.png"
import PalmeritasNoBg from "../../assets/img/products/palmeritas-nobg.png"
import MigaIntegralNoBg from "../../assets/img/products/miga-integral-nobg.png"

const Home = () => {
  const handleConsultar = (productName: string) => {
    console.log(`Consultando: ${productName}`)
  }

  return (
    <div className='flex flex-col gap-20'>
      <Hero />
      <div className='h-[90dvh] flex flex-col justify-center items-center gap-26'>
        <ScrollReveal direction="none" scale={0.5} duration={0.6} blur={20}>
          <h3 className='text-4xl font-extrabold text-red-900 text-center'>Lo más Solicitado por Nuestros Colaboradores</h3>
        </ScrollReveal>
        <div className='flex justify-center items-center gap-8'>
          <ScrollReveal direction="none" scale={0.5} duration={0.6} delay={0.4} blur={20} >
            <ProductCard
              imageSrc={PalmeritasNoBg}
              imageAlt="Palmeritas"
              title="Palmeritas"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse at magnam temporibus. Ad, laudantium voluptates? Odio sunt nobis eum molestias facere cumque."
              badgeText="Más Vendido #2"
              rating={4.5}
              buttonText="Consultar"
              onButtonClick={() => handleConsultar('Palmeritas')}
            />
          </ScrollReveal>
          <ScrollReveal direction="none" scale={0.5} duration={0.6} delay={0.2} blur={20}  >
          <div className='scale-115'>
            <ProductCard
              imageSrc={PanettoneNoBg}
              imageAlt="panettone"
              title="Panettone"
              description="Nuestra receta del panettone italiano. Esponjoso y aromático, repleto de frutas abrillantadas y pasas jugosas, con un dulzor delicado y un toque cítrico irresistible."
              badgeText="Más Vendido #1"
              rating={5}
              buttonText="Consultar"
              onButtonClick={() => handleConsultar('Panettone')}
            />
          </div>
          </ScrollReveal>
          <ScrollReveal direction="none" scale={0.5} duration={0.6} delay={0.6} blur={20} >
          <ProductCard
            imageSrc={MigaIntegralNoBg}
            imageAlt="Miga Integral"
            title="Miga Integral"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse at magnam temporibus. Ad, laudantium voluptates? Odio sunt nobis eum molestias facere cumque."
            badgeText="Más Vendido #3"
            rating={4}
            buttonText="Consultar"
            onButtonClick={() => handleConsultar('Miga Integral')}
          />
          </ScrollReveal>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-14'>
        <ScrollReveal direction="none" scale={0.5} duration={0.6} blur={20}>
          <h3 className='text-4xl font-extrabold text-red-900 text-center'>Hechos con los mejores ingredientes, por las mejores manos </h3>
        </ScrollReveal>
        <VideoBackground />
      </div>
      <Contact />
    </div>
  )
}

export default Home