import React from 'react'
import Container from '../Layout/container'
import laptop from "../../assets/laptop.png";

const Banner = () => {
  return (
<div>
      <section className=''>
          <div className='py-[118px] relative '>
      <Container>
        <div className='text-center mb-[98px]'>
        <h1 className='font-primary text-[56px] w-[796px] m-auto  font-bold  mb-4 leading[64px]'>Get your work done with Management Tool</h1>
        <p className='font-secondery text-lg w-[467px] m-auto leading-8'>The world's first project management platform that connects everything</p>
        <div className='relative mt-8'>
            <input type="text" className='w-[480px] py-5 border rounded-[6px] bg-white placeholder:p-6' placeholder='your email adress' />
            <a href='' className='font-primary text-lg font-medium px-7 py-[15px] rounded-[6px] bg-primary absolute top-[4px] right-[470px] '>Try For Free</a>
        </div>
        </div>
         <div className='absolute' >
      <img  src= {laptop} alt="#laptop" />
    </div>
      </Container>
    </div>
   
    </section>
</div>
  )
}

export default Banner
