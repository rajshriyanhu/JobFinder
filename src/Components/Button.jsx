import React from 'react'

const Button = ({type, customStyles, handleClick, children}) => {

  const generateStyle = (type) => {
    if(type==='filled'){
      return (
        'bg-blue-500 hover:bg-blue-700 text-white'
      )
    }
    else{
      return (
        'align-align-middle bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent '
      )
    }
  }
  return (
    <button className={`${customStyles} ${generateStyle(type)}`} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button