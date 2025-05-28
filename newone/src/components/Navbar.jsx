import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Container from './Layout/container'
import { FaBars } from "react-icons/fa";
import { GiCrossedBones } from 'react-icons/gi';

const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(true)

    }
    return (
        <div className='py-4 md:pt-8'>
            <Container>
                <div className=' md:flex justify-between items-center'>
                    <div className=' flex justify-between items-center'>
                        <img src={logo} alt="#logo" />
                        <div><FaBars onClick={handleClick}  className='text-2xl text-white block md:hidden' /></div>

                    </div>
                    <div>
                        <ul className='hidden md:flex gap-[50px] font-primary font-medium text-lg text-white'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Blogs</a></li>
                        </ul>
                    </div>
                    <div className='hidden md:flex items-center gap-9'>
                        <p className='font-primary text-lg font-medium text-white'>Login</p>
                        <a className='font-primary text-lg font-medium px-12 py-5 rounded-[6px] bg-primary '>Register</a>
                    </div>
                </div>
            </Container>
            {
				show &&
				<div className="bg-secondery relative  w-full py-15 px-15">
					<ul className=" flex-col md:flex-row flex text-white mb-2 md:mt-0 gap-x-[68px]  items-center font-secondary  text-lg font-medium ">
						<li className="mt-2 md:mt-0">
							<a href="#">Home</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Features</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Service</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Pages</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Blog</a>
						</li>
					</ul>
					<div className="button text-white mb-2 md:mb-0 mt-7 md:mt-0 justify-between md:justify-normal flex md:gap-9 items-center font-secondary text-[16px] md:text-lg font-medium">
						<p>
							<a className="leading-{200%]" href="#">
								Login
							</a>
						</p>
						<p>
							<a
								className="text-headtext py-2 px-4 md:py-5 md:px-[48px] bg-secondary rounded-[4px] md:rounded-[6px] leading-5 font-medium"
								href="#"
							>
								Register
							</a>
						</p>
					</div>
					<GiCrossedBones onClick={()=>setShow(false)} className="block absolute top-[-42px] right-5 bg-secondery md:hidden text-2xl text-white cursor-pointer" />
				</div>
			}
		</div>
    )
}

export default Navbar