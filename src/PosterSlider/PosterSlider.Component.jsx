import React from 'react'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../components/HeroCrousal/Arrows.Component';
 import Poster from '../components/Poster/Poster.Component';


const PosterSlider=(props)=>{

    
    
    const settings={
        infinite: true,
        autoplay:true,
        slidesToShow:5,
        NextArrow:<NextArrow />,
        BackArrow:<PrevArrow />,
        slidesToScroll:4,
        initialSlide:0,
        responsive:[
            {
                breakpoints: 1024,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:2,
                    infinite:true,
                    initialSlide:0
                },},
                {
                breakpoints: 600,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    initialSlide:0
                },},
                {
                breakpoints: 480,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    infinite:true,
                    initialSlide:0
                },
            },
        ],
    };
    const {recomendedMovies,title,subtitle,isDark}=props;
    console.log(recomendedMovies);


    return (
        <>
            <div className='flex flex-col items-start my-2 '>
                <h3 className='text-2xl font-bold'>{title}</h3>
                <p className='test-sm text-grwey-800'>{subtitle}</p>
            </div>
            <div>
                <Slider {...settings}>
                    {recomendedMovies.map((each) =>(
                        <Poster Poster={each}  />
                        // console.log("Poster ",each) 
                        ))}
                
                </Slider>
            </div>
        </>
    );
}
export default PosterSlider;