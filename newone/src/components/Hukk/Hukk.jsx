import React from 'react'
import Container from '../Layout/container'
import brand from '../../assets/brand.png'
import elli from '../../assets/ellipse.png'

const Hukk = () => {
    return (
        <div className='pt-[126px] pb-[120px] bg-[#F4FAFA] relative'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-[#FF7364]'>Integrations</h2>
                        <h3 className='font-bold font-secondery text-[46px] w-[553px] leading-[58px] text-head'>Easily integrate with your favorite apps</h3>
                        <p className='text-pera font-primary text-[18px] mt-5 w-[533px]'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
                        <div className='mt-10'>
                            <a href='' className='font-primary text-lg font-medium px-7 py-[15px] rounded-[6px] bg-secondery text-white'>Get AStarted</a>
                        </div>

                    </div>
                    <div>
                        <img src={brand} alt="" />
                    </div>
                </div>
            </Container>
            <div className='absolute bottom-[22px] left-[85px]'>
                <img src={elli} alt="" />
            </div>
        </div>
    )
}

export default Hukk
