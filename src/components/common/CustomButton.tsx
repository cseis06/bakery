import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";


const CustomButton = (props) => {
  const isOutlined = props.outlined === true ? true : false;

  return (
    <button className={`${isOutlined ? 'bg-transparent border-2 border-orange-500 hover:border-orange-400/90 text-orange-500 shadow-none hover:text-amber-50!' : 'bg-orange-500 border-2 border-orange-900/30 hover:border-orange-400/90'} font-light text-amber-50 rounded-md cursor-pointer py-4 px-8 shadow-[inset_20px_20px_60px_-25px_rgba(124,45,18,0.5)] transition-all ease-in-out duration-300 hover:bg-orange-400/90 hover:shadow-[inset_20px_20px_60px_-25px_rgba(249,115,22,0.95)] active:scale-93`}>
      <div className='flex gap-2'>
        <span className='antialiased'>
          Button
        </span>
        <div>
          <FontAwesomeIcon icon={faCoffee} className={`${isOutlined ? '' : 'text-amber-50'}`} />
        </div>
      </div>
    </button>
    
  )
}

export default CustomButton