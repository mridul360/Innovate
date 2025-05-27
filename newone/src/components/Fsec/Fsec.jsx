import React from 'react'
import Container from '../Layout/container'
import fsection from '../../assets/fsection.png'
const Fsec = () => {
  return (
    <div className='pb-[140px] relative'>
      <Container>
        <div className='' >
            <img src={fsection} alt="" />
             <div className=' absolute top-[67px] right-[310px]'>
          <h3 className='font-bold font-secondery text-[46px] w-[590px] leading-[58px] text-white'>Trusted by 35,000+ happy customers.s</h3>
        </div>
        <div className='flex gap-10 absolute top-[240px] right-[290px]'>
          <div>
             <h3 className='font-bold font-secondery text-[46px]  leading-[58px] text-white'>720+</h3>
             <p className='w-[176px] font-primary leading[32px] font-medium text-white '>Over 500 business powered with us</p>
          </div>
          <div>
             <h3 className='font-bold font-secondery text-[46px]  leading-[58px] text-white'>4.9</h3>
             <p className='w-[176px] font-primary leading[32px] font-medium  text-white'>Rating on google play and app store</p>
          </div>
          <div>
             <h3 className='font-bold font-secondery text-[46px]  leading-[58px] text-white'>200+</h3>
             <p className='w-[176px] font-primary leading[32px] font-medium  text-white'>Easily integrate with your favorite apps</p>
          </div>
        </div>
        </div>
        
      </Container>
    </div>
  )
}

export default Fsec
