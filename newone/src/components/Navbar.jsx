import React from 'react'
import logo from '../assets/logo.png'
import Container from './Layout/container'

const Navbar = () => {
    return(
        <div className='pt-8'>
            <Container>
            <div className='md:flex justify-between items-center'>
                <div>
                    <img src= {logo} alt="#logo" />
                </div>
                <div>
                    <ul className='flex gap-[50px] font-primary font-medium text-lg text-white'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Pages</a></li>
                        <li><a href="">Blogs</a></li>
                    </ul>
                </div>
                <div className='flex items-center gap-9'>
                    <p className='font-primary text-lg font-medium text-white'>Login</p>
                    <a className='font-primary text-lg font-medium px-12 py-5 rounded-[6px] bg-primary '>Register</a>
                </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar