import React from 'react'
import Container from '../Layout/container'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

const Platform = () => {
    return (
        <div className='pt-[336px] pb-[160px] px-[60px]'>
            <Container>
                <section className='flex justify-between items-center'>
                    <h3 className='font-bold font-secondery text-5xl w-[512px] leading-[58px] text-head'>How simple is it to use our platform?</h3>
                    <p className='w-[480px] font-primary leading-[32px] text-pera'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
                </section>
                <div className='flex justify-between mt-[116px]'>
                    <div className='text-center'>
                        <img className='mx-auto' src={icon1} alt="" /> 
                        <h3 className='font-bold font-secondery text-head text-2xl w-[300px] mx-auto'>Login or sign up to be able use our platform</h3>
                        <p className='text-pera font-primary w-[300px]'>This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
                    </div>
                    <div  className='text-center'>
                        <img className='mx-auto' src={icon2} alt="" />
                        <h3 className='font-bold font-secondery text-head text-2xl w-[300px] mx-auto'>Connect your website with just a few click</h3>
                        <p className='text-pera font-primary w-[300px]'>Once your website is online, you can configure it, I will show you how to put your website online</p>
                    </div>
                    <div  className='text-center'>
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
