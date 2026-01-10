import React from 'react';
import Hero from '../../components/hero/Hero';
import ProductCard from '../../components/common/ProductCard';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <div className='h-[90dvh] flex flex-col justify-evenly items-center'>
        <h3 className='text-4xl font-extrabold text-red-900 pb-6'>Lo más Solicitado por Nuestros Colaboradores</h3>
        <div className='flex justify-center items-center gap-8'>
          <ProductCard />
          <div className='scale-115'>
            <ProductCard />
          </div>
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default Home