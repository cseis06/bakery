import React from 'react';
import Hero from '../../components/hero/Hero';
import ProductCard from '../../components/common/ProductCard';

const Home = () => {
  return (
    <div className='h-[90dvh]'>
        <Hero />
        <ProductCard />
    </div>
  )
}

export default Home