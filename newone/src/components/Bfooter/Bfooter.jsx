import React from 'react'
import Container from '../Layout/container'
import cta from '../../assets/cta.png'

const Bfooter = () => {
    return (
        <div className='p-40 relative'>
            <Container>
                <div className=''>
                    <img src={cta} alt="" className='absolute top-[165px] left-[220px]' />
                    <div className='absolute top-[280px] left-[322px] flex gap-100 items-center'>
                        <h3 className='font-bold font-secondery text-[46px] w-[577px] leading-[58px] text-white  '>Don’t find the answer? contact us for any query.</h3>
                        <div className=''>
                            <a href='' className='font-primary text-lg font-medium px-7 py-[15px] rounded-[6px] bg-primary  text-black'>Contact Us</a>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Bfooter
