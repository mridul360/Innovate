import React from 'react'
import Container from '../Layout/container'
import icon8 from '../../assets/icon8.png'
import icon9 from '../../assets/icon9.png'
import icon6 from '../../assets/icon6.png'
import chk from '../../assets/chk.png'

const Pricing = () => {
  return (
    <div className='md:pb-[160px]'>
        <Container >
                   <h3 className='font-bold font-secondery text-[46px]  leading-[58px] text-head text-center m-auto'>Pricing Designed To Fit Your Business</h3>
                   <p className='font-bold font-secondery text-[24px] text-secondery text-center mt-[39px] mb-[77px] '>Monthly</p>
                   <div className='md:flex gap-[30px]'>
                    <div className='py-10 px-15 bg-[#DCE7FE] group hover:bg-secondery duration-500 rounded-[20px]'>
                        <img className='text-center mx-auto mb-8' src={icon8} alt="" />
                        <h2 className='font-bold font-secondery text-[24px] text-secondery text-center group-hover:text-[#43E7DF]'>Personal</h2>
                        <h3 className='font-bold font-secondery text-[46px] mb-[14px] mt-[2px]  leading-[58px] group-hover:text-white text-head text-center mx-auto'>$10/mth</h3>
                        <p className=' font-primary leading[32px] font-medium text-pera text-center m-auto group-hover:text-white'>OAnnual pricing (save 30%)</p>
                        <ul className='flex flex-col gap-[26px] mb-12 mt-10 group-hover:text-white'>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                        </ul>
                        <button href='' className='font-primary text-lg font-medium px-13  md:px-[92px] py-[15px] rounded-[6px] bg-secondery group-hover:bg-[#43E7DF] group-hover:text-black  text-white '>Purchase Now</button>
                    </div>
                    <div className='py-10 px-15 bg-[#DCE7FE] group hover:bg-secondery duration-500 rounded-[20px] md:mt-0 mt-5'>
                        <img className='text-center mx-auto mb-8' src={icon9} alt="" />
                        <h2 className='font-bold font-secondery text-[24px] text-secondery text-center group-hover:text-[#43E7DF]'>Team</h2>
                        <h3 className='font-bold font-secondery text-[46px] mb-[14px] mt-[2px]  leading-[58px] group-hover:text-white text-head text-center mx-auto'>$25/mth</h3>
                        <p className=' font-primary leading[32px] font-medium text-pera text-center m-auto group-hover:text-white'>OAnnual pricing (save 35%)</p>
                        <ul className='flex flex-col gap-[26px] mb-12 mt-10 group-hover:text-white'>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                        </ul>
                        <button href='' className='font-primary text-lg font-medium px-13  md:px-[92px] py-[15px] rounded-[6px] bg-secondery group-hover:bg-[#43E7DF] group-hover:text-black  text-white '>Purchase Now</button>
                    </div>
                    <div className='py-10 px-15 bg-[#DCE7FE] group hover:bg-secondery duration-500 rounded-[20px] md:mt-0 mt-5'>
                        <img className='text-center mx-auto mb-8' src={icon6} alt="" />
                        <h2 className='font-bold font-secondery text-[24px] text-secondery text-center group-hover:text-[#43E7DF]'>Enterprise</h2>
                        <h3 className='font-bold font-secondery text-[46px] mb-[14px] mt-[2px]  leading-[58px] group-hover:text-white text-head text-center mx-auto'>$50/mth</h3>
                        <p className=' font-primary leading[32px] font-medium text-pera text-center m-auto group-hover:text-white'>OAnnual pricing (save 40%)</p>
                        <ul className='flex flex-col gap-[26px] mb-12 mt-10 group-hover:text-white'>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                            <li className='flex gap-[22px]'>
                                <img src={chk} alt="" />
                                <p>Calendar View</p>
                            </li>
                        </ul>
                        <button href='' className='font-primary text-lg font-medium px-13  md:px-[92px] py-[15px] rounded-[6px] bg-secondery group-hover:bg-[#43E7DF] group-hover:text-black  text-white '>Purchase Now</button>
                    </div>
                   </div>
        </Container>
    </div>
  )
}

export default Pricing
