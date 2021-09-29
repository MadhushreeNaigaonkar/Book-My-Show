import React, { useState } from "react";
import HeroSlider from 'react-slick';


import { NextArrow ,PrevArrow} from "./Arrows.Component";


const HeroCarousel = ()=>{
    const [images, setImages] =useState ([
        'https://in.bmscdn.com/promotions/cms/creatives/1632476152198_datingamber_1240x300.jpg',
        'https://in.bmscdn.com/promotions/cms/creatives/1631025243018_basteachersdaycampaign_webshowcase_1240x300.jpg',
        'https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg'
    ]);

     const settingLG= {
         arrows:true,
         autoplay:true,
         centerMode:true,
         centerPadding: "20px",
         slidesToShow: 1,
         nextArrow:<NextArrow />,
         previousArrow:<PrevArrow />, 
         infinite: true,
         slidesToScroll: 1
        
      };

      const settings= {
        arrows:true,
        speed:500,
        nextArrow:<NextArrow />,
        previousArrow:<PrevArrow />, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
     };

    return (
         <>
         <div className='lg:hidden'>
             <HeroSlider {...settings}>
                 {images.map((image)=>(
                     <div className='w-full h-56 md:h-80 py-3'>
                         <img src={image} alt='Hero Banner' className='w-full h-full object-center'/>
                     </div>
                 ))}
             </HeroSlider>
         </div>
         <div className="hidden lg:block">
             <HeroSlider {...settingLG}>
                 {images.map((image)=>(
                     <div className='w-full h-96 px-2 py-3'>
                         <img src={image} alt='Hero Banner' className='w-full h-full object-center rounded-md' />
                     </div>

                 ))}
             </HeroSlider>

         </div>
         </>
    );};

    export default HeroCarousel;