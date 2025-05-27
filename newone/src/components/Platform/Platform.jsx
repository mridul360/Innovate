import React from 'react'
import Container from '../Layout/container'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

const Platform = () => {
    return (
        <div className='md:pt-[336px] pb-25 pt-15 md:pb-[160px] md:px-[60px]'>
            <Container>
                <section className='md:flex justify-between items-center'>
                    <h3 className='text-center md:text-start font-bold font-secondery text-2xl leading-[30px] md:text-5xl md:w-[512px] md:leading-[58px] text-head'>How simple is it to use our platform?</h3>
                    <p className='md:w-[480px] text-center md:text-start font-primary leading-[32px] text-pera'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
                </section>
                <div className='md:flex justify-between mt-[116px] '>
                    <div className='text-center '>
                        <img className='mx-auto' src={icon1} alt="" /> 
                        <h3 className='font-bold font-secondery text-head text-2xl w-[300px] mx-auto'>Login or sign up to be able use our platform</h3>
                        <p className='text-pera font-primary w-[300px]'>This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
                    </div>
                    <div  className='text-center mt-9 md:mt-0'>
                        <img className='mx-auto' src={icon2} alt="" />
                        <h3 className='font-bold font-secondery text-head text-2xl w-[300px] mx-auto'>Connect your website with just a few click</h3>
                        <p className='text-pera font-primary w-[300px]'>Once your website is online, you can configure it, I will show you how to put your website online</p>
                    </div>
                    <div  className='text-center mt-9 md:mt-0'>
                        <img className='mx-auto' src={icon3} alt="" />
                        <h3 className='font-bold font-secondery text-head text-2xl w-[300px] mx-auto'>Take some sales data that you want</h3>
                        <p className='text-pera font-primary w-[300px]'>Sell your data directly: The most straightforward method is to sell your data directly to another</p>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Platform
