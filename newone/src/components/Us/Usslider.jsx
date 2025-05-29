import React from 'react'
import { FaStar } from 'react-icons/fa6'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", }}
            onClick={onClick}
        />
    );
}

function Usslider() {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };



    return (
        <div className='w-full md:max-w-[600px] mx-auto h-[300px] '>
            <Slider {...settings}>

                <div className=' relative mt-[107px] ' >
                    <div className='bg-[#C4C4C4] md:h-[124px] md:w-[124px] h-[100px] w-[100px] rounded-full border-[#F7F7FC] border-[10px]  absolute md:top-[-80px] left-[10px] top-[-65px] md:left-[48px]'></div>
                    <div className='md:px-[60px] md:pt-[64px] md:pb-[50px] py-8 px-5 bg-[#FFFFFF] rounded-[20px]'>
                        <p className=' text-[22px] font-primary md:w-[567px] md:leading-[44px] text-[#6C6E81]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                        <p className='font-bold font-secondery text-[24px] text-[#30344E] mt-[37px]'>Robert Fox</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-pera font-primary text-[18px] mt-1'>Digital Marketer</p>
                            <div className='flex items-center text-yellow-300'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' relative mt-[107px] ' >
                    <div className='bg-[#C4C4C4] md:h-[124px] md:w-[124px] h-[100px] w-[100px] rounded-full border-[#F7F7FC] border-[10px]  absolute md:top-[-80px] left-[10px] top-[-65px] md:left-[48px]'></div>
                    <div className='md:px-[60px] md:pt-[64px] md:pb-[50px] py-8 px-5 bg-[#FFFFFF] rounded-[20px]'>
                        <p className=' text-[22px] font-primary md:w-[567px] md:leading-[44px] text-[#6C6E81]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                        <p className='font-bold font-secondery text-[24px] text-[#30344E] mt-[37px]'>Robert Fox</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-pera font-primary text-[18px] mt-1'>Digital Marketer</p>
                            <div className='flex items-center text-yellow-300'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' relative mt-[107px] ' >
                    <div className='bg-[#C4C4C4] md:h-[124px] md:w-[124px] h-[100px] w-[100px] rounded-full border-[#F7F7FC] border-[10px]  absolute md:top-[-80px] left-[10px] top-[-65px] md:left-[48px]'></div>
                    <div className='md:px-[60px] md:pt-[64px] md:pb-[50px] py-8 px-5 bg-[#FFFFFF] rounded-[20px]'>
                        <p className=' text-[22px] font-primary md:w-[567px] md:leading-[44px] text-[#6C6E81]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                        <p className='font-bold font-secondery text-[24px] text-[#30344E] mt-[37px]'>Robert Fox</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-pera font-primary text-[18px] mt-1'>Digital Marketer</p>
                            <div className='flex items-center text-yellow-300'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Usslider
