import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
//import Panettone from "../../assets/panettone.jpg"
import PanettoneNoBg from "../../assets/panettone-nobg.png"

const ProductCard = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='h-1'>
        <img
          src={PanettoneNoBg}
          alt="panettone"
          className="w-[225px] relative bottom-[75px]"
        />
      </div>
      <div className='max-w-[275px] flex flex-col items-center p-3 rounded-2xl bg-amber-950/15 '>
        <div className='relative h-[100px]' />
        <h4 className='text-xl font-extrabold text-red-900 py-3'>Panettone</h4>
        <div className='flex flex-col gap-3'>
          <p className='text-xs'>
            Nuestra receta del panettone italiano. Esponjoso y aromático, repleto de frutas abrillantadas y pasas jugosas, con un dulzor delicado y un toque cítrico irresistible.
          </p>

          <div className='w-full flex justify-between justify-self-end items-center'>
            <span className='text-xs'>Más Vendido <i>#2</i></span>

            <div className='text-yellow-600'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
        <button className='relative top-5'>
          <div className='flex justify-center cursor-pointer w-[100px] rounded-full bg-linear-to-r from-red-950 via-orange-900 to-amber-700 py-3 px-4'>
            <span className='text-center text-xs font-semibold text-white '>Consultar</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ProductCard