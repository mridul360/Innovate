import React from 'react'
import Container from '../Layout/container'
import { FaStar } from "react-icons/fa6";
import Slider from 'react-slick';
import Usslider from './Usslider';

const Us = () => {
    return (
        <div className='bg-[#F4FAFA] py-[200px]'>
            <Container>
                <div className='flex justify-between '>
                    <div>
                        <h3 className='font-bold font-secondery text-[46px] w-[553px] leading-[58px] text-head '>What they are talking
                            about us?</h3>
                            <p className='text-pera font-primary text-[18px] mt-5 mb-11 w-[503px]'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
                            <div className='mt-15'>
                            <a href='' className='font-primary text-lg font-medium px-7 py-[15px] rounded-[6px] bg-secondery text-white'>Get AStarted</a>
                        </div>
                            <div >
                                <div className='mt-30 relative'>
                            <div className='bg-[#C4C4C4] h-[58px] w-[58px] rounded-full border-[#FFFFFF] border  absolute'></div>
                            <div className='bg-[#C4C4C4] h-[58px] w-[58px] rounded-full border-[#FFFFFF] border absolute left-[30px]'></div>
                            <div className='bg-[#C4C4C4] h-[58px] w-[58px] rounded-full border-[#FFFFFF] border absolute left-[60px]'></div>
                            <div className='bg-[#C4C4C4] h-[58px] w-[58px] rounded-full border-[#FFFFFF] border absolute left-[90px]'></div>
                        </div>
                        <div className='ml-40  flex items-center gap-[10px] '>
                            <h2 className='font-bold font-secondery text-[24px] text-secondery '>4.5 <span>|</span></h2>
                            <div className='flex items-center text-yellow-300'>
                                <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>
                        </div>
                        <p className='] text-[#645E76] ml-40  '>280k Total Review</p>
                            </div>
                        
                      
                    </div>

                   <div>
                    <Usslider />
                   </div>
                </div>
            </Container>
        </div>
    )
}

export default Us
