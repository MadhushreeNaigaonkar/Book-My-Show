import React from "react";
//import { Link } from "react-router-dom";

const Poster=({Poster})=>{
    return(
        <div className='flex flex-col items-start gap-2 px-1 md:px-2'>
            <div className='w-60 h-40 md:h-80 '>
                <img src={Poster.src} alt='poster' className='w-full h-full rounded-md'/>
            </div>
            <h3 className='text-lg font-bold text-white'>
                {Poster.title}
            </h3>
            <p className='text-sm text-white'>{Poster.subtitle}</p>
        </div>
   )
}
export default Poster;