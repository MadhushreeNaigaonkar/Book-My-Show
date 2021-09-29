import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.Card";
import HeroCarousel from "../components/HeroCrousal/HeroCrousal.Component";
import PosterSlider from "../PosterSlider/PosterSlider.Component";

function HomePage(){
    const recomendedMovies=[
        {
            src: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTI1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
            title:"Jungle Cruise",
            subtitle:"Adventure / Comedy / Family / Fantasy",
        },
        
        
    ];
    return(
    <>
        <HeroCarousel />
            <div className='container mx-auto px-4'>
                <h1 className='text-2xl font-bold text-gray-800 my-3'> The Best Of Entertainment</h1>
                <EntertainmentCardSlider />
              
            </div>

            <div className='container  mx-auto px-2 text-black my-3' >
            <PosterSlider
                title="Recomended Movies"
                subtitle="List of recomended Movies"
                recomendedMovies={recomendedMovies}
                isDark={false} />
            </div>

            
            {/* <div className='container  mx-auto px-2 text-black my-3' >
            <PosterSlider
                title="Premiers" 
                subtitle="Each friday new releases"
                recomendedMovies={recomendedMovies}
                isDark={false}/>
            </div> */}
    </>      
    );

}
export default HomePage;