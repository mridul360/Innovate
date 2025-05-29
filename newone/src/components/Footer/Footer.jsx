import React from 'react'
import Container from '../Layout/container'
import cta from '../../assets/cta.png'
import { IoIosSend } from "react-icons/io";
import logo2 from "../../assets/logo2.png";

const Footer = () => {
  return (
    <div className=' bg-[#F7F7FC]'>
      <Container>
        <div className='relative'>
                    
                    <div className='flex gap-[30px] justify-between md:pt-[291px]'>
                        <div>
                            <img src={logo2} alt="#logo2" />
                            <p className='mt-[26px] mb-6 font-secondary text-pera text-[16px] leading-7 max-w-[263px]'>Build a modern and creative website with Innovate.</p>
                            <div className='flex gap-2'>
                                <img src={logo2} alt="#gicon" />
                            </div>
                        </div>
                        <div className='flex gap-[85px] mb-[86px] items-start'>
                          <div>
                            <h4 className='font-secondary text-pera text-[18px] leading-8 font-medium mb-[18px]'>Product</h4>
                            <ul className='flex flex-col gap-[12px]'>
                                <li className='font-secondary text-[16px] leading-[26px] '>Landingpages</li>
                                <li className='font-secondary text-[16px] leading-[26px]'>Pricing</li>
                                <li className='font-secondary text-[16px] leading-[26px]'>Benefits</li>
                                <li className='font-secondary text-[16px] leading-[26px]'>Features</li>
                            </ul>
                          </div>
                            <div>
                              <h4 className='font-secondary text-pera text-[18px] leading-8 font-medium mb-[18px]'>Company</h4>
                              <ul className='flex flex-col gap-[12px]'>
                                <li className='font-secondary text-[16px] leading-[26px] '>About</li>
                                <li className='font-secondary text-[16px] leading-[26px]'>Privacy Policy</li>
                                <li className='font-secondary text-[16px] leading-[26px]'>Terms & Conditions</li>
                                <li className='font-secondary text-[16px] leading-[26px]'>Partners</li>
                                <li className='font-secondary text-[16px] leading-[26px]'>Contact</li>
                            </ul>
                            </div>
                            <div>
                              <h4 className='font-secondary text-pera text-[18px] leading-8 font-medium mb-[18px]'>Resources</h4>
                              <ul className='flex flex-col gap-[12px]'>
                                <li className='font-secondary text-[16px] leading-[26px] '>Guides and resources</li>
                                <li className='font-secondary text-[16px] leading-[26px]'>Blog</li>
                                <li className='font-secondary text-[16px] leading-[26px]'>Tools</li>
                                <li className='font-secondary text-[16px] leading-[26px]'>Support</li>
                            </ul>
                            </div>
                        </div>
                        <div>
                            <h4 className='font-secondary text-pera text-[18px] leading-8 font-medium'>Get Latest Updates</h4>
                            <p className='mt-[18px] mb-[32px] font-secondary text-pera text-[16px] leading-[26px] max-w-[285px]'>Subscribe to our newsletter and get many interesting things every week</p>
                            <div className='relative'>
                                <input type="text" className='w-[269px] h-[46px] bg-[#F7F7FC] rounded-[6px] mb-[98px] px-3 border-[#D2D2D2] border outline-0' placeholder='Your Email Address' />
                                <button className='absolute top-[5px] right-[22px]  font-secondary font-lg font-medium h-9 w-9 bg-secondery rounded-[6px] flex justify-center items-center '>
                                    <IoIosSend className='h-[22px] w-[22px] text-white'/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='border-t-2 border-[#D2D2D2]'>
                        <p className='mt-[24px] mb-[30px]'>© 2024 Innovate - All Right Reserved</p>
                    </div>
                </div>
      </Container>
    </div>
  )
}

export default Footer
