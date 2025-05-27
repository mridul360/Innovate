import React from 'react'
import Container from '../Layout/container'
import eimg from '../../assets/leftt.png'
import b1 from '../../assets/b1.png'
import b3 from '../../assets/b3.png'

function Features() {
    return (
        <div  className='pb-[35px]'>
            <Container>
                <div className='md:flex justify-between '>
                    <div className='    '>
                        <img src={eimg} alt="" />
                    </div>
                    <div>
                        <h3 className='font-bold font-secondery md:text-[46px] md:w-[553px] text-2xl leading-[30px] md:leading-[58px] text-head'>We provide features for your Business</h3>
                        <div className='mt-[64px]  md:flex gap-[60px]'>
                            <div>
                                <img src={b1} alt="" />
                                <h3  className='font-bold font-secondery text-head text-2xl mt-[14px] mb-[6px]'>Fast and Easy to use</h3>
                                <p  className='text-pera font-primary w-[220px] leading-[32px] text-[18px]'>Easily to convert API with just a few clicks</p>
                            </div>
                            <div>
                                <img src={b3} alt="" />
                                <h3  className='font-bold font-secondery text-head text-2xl mt-[14px] mb-[6px]'>Fast and Easy to use</h3>
                                <p  className='text-pera font-primary w-[220px] leading-[32px] text-[18px]'>Easily to convert API with just a few clicks</p>
                            </div>
                        </div>
                        
                        <div className='mt-[64px]  md:flex justify-between'>
                            <div>
                                <img src={b1} alt="" />
                                <h3  className='font-bold font-secondery text-head text-2xl mt-[14px] mb-[6px]'>Fast and Easy to use</h3>
                                <p  className='text-pera font-primary w-[220px] leading-[32px] text-[18px]'>Easily to convert API with just a few clicks</p>
                            </div>
                            <div className='mt-[100px]'>
                                <button href='' className='font-primary text-lg font-medium px-7 py-[15px] rounded-[6px] bg-secondery cursor-pointer text-white'>Get AStarted</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Features
