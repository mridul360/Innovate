import React from 'react'

const Header = ({children}) => {
  return (
    <div className='bg-[url(/bg.png)] bg-cover bg-no-repeat bg-center pb-90'>
      {children}
    </div>
  )
}

export default Header
