import React from 'react'

const GradientButton = ({title, onClick, type}) => {
  return (
    <button type={type} onClick={onClick} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 py-2 w-40 rounded-lg my-4 m-auto hover:bg-green-500">
    <span className="text-white text-lg">{title}</span>
  </button>
  )
}

export default GradientButton
