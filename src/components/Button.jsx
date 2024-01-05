import React from 'react'

const Button = ({fullWidth, label, iconURL, backgroundColor, textColor, borderColor, hoverColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red'} rounded-full ${fullWidth && 'w-full'} 
      ${hoverColor ? 'hover:bg-black hover:text-white' : 'hover:bg-orange-500'} transition duration-150 hover:ease-in hover:underline`}>
      {/*  ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red'} */}
  {label}
  {iconURL && <img src={iconURL} alt="iconURL" className="ml-2 rounded-full w-5 h-5" />}
</button> 

  )
}

export default Button