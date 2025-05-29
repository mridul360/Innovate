import React from 'react'
import Container from '../Layout/container'
import grp1 from '../../assets/grp1.png'
import grp2 from '../../assets/grp2.png'
import grp3 from '../../assets/grp3.png'
import grp4 from '../../assets/grp4.png'
import { FaArrowRightLong } from "react-icons/fa6";


const Moree = () => {
    return (
        <div className='md:pt-[140px] pb-[80px] md:pb-[140px]'>
            <Container>
                <div className='text-center'>
                    <h2 className='text-[#FF7364]'>Our Services</h2>
                    <h3 className='font-bold font-secondery md:text-[46px] text-2xl md:w-[553px] leading-[58px] text-head mx-auto'>How It Works</h3>
                </div>
                <div className='md:my-20 my-10 md:flex md:gap-3'>
                    <div className='inset-shadow-xs bg-[#DCE7FE] p-[25px] rounded-[20px] group hover:bg-secondery duration-300 ease-in'>
                        <img src={grp1} alt="" />
                         <h3 className='font-bold font-secondery text-head text-2xl w-[300px] mt-[26px] group-hover:text-white duration-300 ease-in '>Plan Product Roadmap</h3>
                         <p className='text-pera font-primary text-[18px] mt-5 mb-11 w-[258px] group-hover:text-white duration-300 ease-in'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                         <div className='flex'>
                            <div className='flex items-center gap-[5px]'>
                                <a href="" className='group-hover:text-white duration-300 ease-in'>Read More</a>
                                 <FaArrowRightLong  className= 'font-bold text-secondery mt-1 group-hover:text-white duration-300 ease-in' />
                            </div>
                         </div>
                    </div>
                    <div className='inset-shadow-xs mt-5 md:mt-0 bg-[#DCE7FE] p-[25px] rounded-[20px] group hover:bg-secondery duration-300 ease-in'>
                        <img src={grp2} alt="" />
                         <h3 className='font-bold font-secondery text-head text-2xl w-[300px] mt-[26px] group-hover:text-white '>Assign Any Work</h3>
                         <p className='text-pera font-primary text-[18px] mt-5 mb-11 w-[258px] group-hover:text-white'>Work assignment or job assignment is allocating work to work centers or appropriate </p>
                         <div className='flex gap-[5px]'>
                            <a href="" className='group-hover:text-white'>Read More</a>
                            <FaArrowRightLong  className= 'font-bold text-secondery mt-1 group-hover:text-white duration-300 ease-in' />
                         </div>
                    </div>
                    <div className='inset-shadow-xs mt-5 md:mt-0 bg-[#DCE7FE] p-[25px] rounded-[20px] group hover:bg-secondery duration-300 ease-in'>
                        <img src={grp3} alt="" />
                         <h3 className='font-bold font-secondery text-head text-2xl w-[300px] mt-[26px] group-hover:text-white '>Monitor Work Progress</h3>
                         <p className='text-pera font-primary text-[18px] mt-5 mb-6 w-[258px] group-hover:text-white'>Monitor Work ProgressKeeping records and monitoring activities helps people see progress </p>
                         <div className='flex gap-[5px]'>
                            <a href="" className='group-hover:text-white'>Read More</a>
                            <FaArrowRightLong  className= 'font-bold text-secondery mt-1 group-hover:text-white duration-300 ease-in' />
                         </div>
                    </div>
                    <div className='inset-shadow-xs mt-5 md:mt-0 bg-[#DCE7FE] p-[25px] rounded-[20px] group hover:bg-secondery duration-300 ease-in'>
                        <img src={grp4} alt="" />
                         <h3 className='font-bold font-secondery text-head text-2xl w-[300px] mt-[26px] group-hover:text-white '>Pertect Intergration</h3>
                         <p className='text-pera font-primary text-[18px] mt-5 mb-6 w-[258px] group-hover:text-white'>App integration, in a general sense, is the process of resources or capabilities from one application </p>
                         <div className='flex gap-[5px]'>
                            <a href="" className='group-hover:text-white'>Read More</a>
                            <FaArrowRightLong  className= 'font-bold text-secondery mt-1 group-hover:text-white duration-300 ease-in' />
                         </div>
                    </div>
                    
                </div>
                    <div className='justify-center flex '>
                        <a className='border-[1px] border-[#3639A4] px-12 py-5 mx-auto  text-secondery rounded-[8px] hover:text-white hover:bg-secondery duration-300'  href=""> View More</a>
                    </div>
                
            </Container>
        </div>
    )
}

export default Moree
