import React from 'react'
import Container from '../Layout/container'
import fsection from '../../assets/fsection.png'
const Fsec = () => {
  return (
    <div className='md:pb-[140px] relative'>
      <Container>
        <div className='' >
            <img src={fsection} alt="" />
             <div className=' absolute top-0 md:top-[67px] md:right-[310px]'>
          <h3 className='font-bold font-secondery md:text-[46px] md:w-[590px] md:leading-[58px] text-white'>Trusted by 35,000+ happy customers.s</h3>
        </div>
        <div className='flex gap-10 absolute top-0 md:top-[240px] md:right-[290px]'>
          <div>
             <h3 className='font-bold md:font-secondery md:text-[46px]  md:leading-[58px] text-white'>720+</h3>
             <p className='md:w-[176px] font-primary md:leading[32px] font-medium text-white '>Over 500 business powered with us</p>
          </div>
          <div>
             <h3 className='font-bold font-secondery md:text-[46px]  md:leading-[58px] text-white'>4.9</h3>
             <p className='w-[176px] font-primary leading[32px] font-medium  text-white'>Rating on google play and app store</p>
          </div>
          <div>
             <h3 className='font-bold font-secondery md:text-[46px]  md:leading-[58px] text-white'>200+</h3>
             <p className='md:w-[176px] font-primary md:leading[32px] font-medium  text-white'>Easily integrate with your favorite apps</p>
          </div>
        </div>
        </div>
        
      </Container>
    </div>
  )
}

export default Fsec
