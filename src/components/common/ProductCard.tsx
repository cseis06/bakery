import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

interface ProductCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  badgeText?: string
  rating?: number
  maxRating?: number
  buttonText?: string
  onButtonClick?: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  badgeText = '',
  rating = 5,
  maxRating = 5,
  buttonText = 'Consultar',
  onButtonClick,
}) => {
  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? faStarSolid : faStarRegular}
        />
      )
    }
    return stars
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='h-1'>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-[225px] relative bottom-[75px]"
        />
      </div>
      <div className='max-w-[275px] flex flex-col items-center p-3 rounded-2xl bg-amber-950/15'>
        <div className='relative h-[100px]' />
        <h4 className='text-xl font-extrabold text-red-900 py-3'>{title}</h4>
        <div className='flex flex-col gap-3'>
          <p className='text-xs'>{description}</p>

          <div className='w-full flex justify-between justify-self-end items-center'>
            {badgeText && (
              <span className='text-xs'>{badgeText}</span>
            )}

            <div className='text-yellow-600'>
              {renderStars()}
            </div>
          </div>
        </div>
        <button className='relative top-5' onClick={onButtonClick}>
          <div className='flex justify-center cursor-pointer w-[100px] rounded-full bg-linear-to-r from-red-950 to-amber-700 py-3 px-4'>
            <span className='text-center text-xs font-semibold text-white'>{buttonText}</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ProductCard