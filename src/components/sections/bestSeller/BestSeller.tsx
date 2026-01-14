import React from 'react';
import ScrollReveal from '../../animation/ScrollReveal';
import ProductCard from '../../common/ProductCard';
import PanettoneNoBg from "../../../assets/img/products/panettone-nobg.png"
import PalmeritasNoBg from "../../../assets/img/products/palmeritas-nobg.png"
import MigaIntegralNoBg from "../../../assets/img/products/miga-integral-nobg.png"

const BestSeller = () => {
    const handleConsultar = (productName: string) => {
        console.log(`Consultando: ${productName}`)
    }

  return (
    <section className='h-[90dvh] flex flex-col justify-center items-center gap-26 text-center'>
        <ScrollReveal direction="none" scale={0.5} duration={0.6} blur={20}>
          <h3 className='text-6xl font-extrabold text-red-900 text-center italic'>Lo Más Solicitado</h3>
          <span className='text-xl font-light text-red-900 text-center uppercase'>
            Estos son los sabores que nuestros aliados eligen con más frecuencia...
          </span>
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
          <div className='scale-115!'>
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
      </section>
  )
}

export default BestSeller;
