import React from 'react'
import Container from '../Layout/container'
import fsection from '../../assets/fsection.png'
const Fsec = () => {
  return (
    // <div className='md:pb-[140px] relative'>
    //   <Container>
    //     <div className='' >
    //         <img src={fsection} alt="" />
    //          <div className=' absolute top-0 md:top-[67px] md:right-[310px]'>
    //       <h3 className='font-bold font-secondery md:text-[46px] md:w-[590px] md:leading-[58px] text-white'>Trusted by 35,000+ happy customers.s</h3>
    //     </div>
    //     <div className='flex gap-10 absolute top-0 md:top-[240px] md:right-[290px]'>
    //       <div>
    //          <h3 className='font-bold md:font-secondery md:text-[46px]  md:leading-[58px] text-white'>720+</h3>
    //          <p className='md:w-[176px] font-primary md:leading[32px] font-medium text-white '>Over 500 business powered with us</p>
    //       </div>
    //       <div>
    //          <h3 className='font-bold font-secondery md:text-[46px]  md:leading-[58px] text-white'>4.9</h3>
    //          <p className='w-[176px] font-primary leading[32px] font-medium  text-white'>Rating on google play and app store</p>
    //       </div>
    //       <div>
    //          <h3 className='font-bold font-secondery md:text-[46px]  md:leading-[58px] text-white'>200+</h3>
    //          <p className='md:w-[176px] font-primary md:leading[32px] font-medium  text-white'>Easily integrate with your favorite apps</p>
    //       </div>
    //     </div>
    //     </div>
        
    //   </Container>
    // </div>

    <section className='mb-[140px]'>
        <Container>
            <div className='py-[85px] rounded-[40px] bg-no-repeat bg-cover bg-center' 
            style={{ backgroundImage: `url(${fsection})` }}>
                <div className='flex md:justify-end text-center md:mr-[124px]'>
                    <h1 className='md:max-w-[554px] font-primary font-bold text-white text-2xl md:text-[44px]'>Trusted by 35,000+ happy customers.</h1>
                </div>
                <div className='text-center 2xl:flex justify-end gap-[40px] md:mr-[70px] mt-[64px]'>
                    <div>
                        <h1 className='font-primary font-black text-white text-[44px] leading-[54px]'>720+</h1>
                        <p className='md:max-w-[176px] font-secondary font-medium text-[17px] leading-[32px] text-white mt-2'>Over 500 business powered with us</p>
                    </div>
                    <div>
                        <h1 className='font-primary font-black text-white text-[44px] leading-[54px]'>4.9+</h1>
                        <p className='md:max-w-[176px] font-secondary font-medium text-[17px] leading-[32px] text-white mt-2'>Rating on google play and app store</p>
                    </div>
                    <div>
                        <h1 className='font-primary font-black text-white text-[44px] leading-[54px]'>200+</h1>
                        <p className='md:max-w-[176px] font-secondary font-medium text-[17px] leading-[32px] text-white mt-2'>Easily integrate with your favorite apps</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Fsec
