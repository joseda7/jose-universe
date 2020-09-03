import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

interface CarouselInterface {
   imgs: string[];
   text: string;
   back: string;
   next: string;
}

const Carousel = (props:CarouselInterface) => {

   const [slider, setSlider] = useState<any>();
   const [sliderIndex, setSliderIndex] = useState<number>(0);

   const goToNext = () => {
      slider.slickGoTo(sliderIndex+1);
   }

   const goToBack = () => {
      slider.slickGoTo(sliderIndex - 1);
   }

   const isActiveBack = ( _true: any, _false: any ) => sliderIndex > 0 ? _true : _false;
   const isActiveNext = ( _true: any, _false: any ) => sliderIndex < props.imgs.length-1 ? _true : _false;

   const settings = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (_: number, next: number) => setSliderIndex(next)
   };

   return(
      <div className='o-slider' >
         <Slider ref={ _slider => setSlider(_slider)} {...settings} className='carrusel' >
            {props.imgs.map( (value, index) => (
               <img className='cover' src={value} key={index} />
            ) )}
         </Slider>
         <div className='display' >

         </div>
         <div className='arrow-content' >
            <div className='arrows' >
               <div className='arrows-contain' >
                  { isActiveBack(true, false) && <>
                  <span
                     className={ isActiveBack('direction active', 'direction') }
                     onClick={ isActiveBack(goToBack, undefined) } 
                  >{props.back}</span>
                  <div 
                     className={ isActiveBack('arrow icon-arrow-left active', 'arrow icon-arrow-left') }
                     onClick={ isActiveBack(goToBack, undefined) } 
                  />
                  </>}
                  { isActiveNext(true, false) &&  <>
                     <div 
                     className={ isActiveNext('arrow icon-arrow-right active', 'arrow icon-arrow-right') }
                     onClick={ isActiveNext(goToNext, undefined) }
                  />
                  <span 
                     className={ isActiveNext('direction active', 'direction') } 
                     onClick={ isActiveNext(goToNext, undefined) }  
                  >{props.next}</span>
                  </>}
               </div>
               <span 
                  className='direction-mobile active' 
                  onClick={ isActiveNext(goToNext, goToBack) }
               >{ isActiveNext(props.next, props.back) }</span>
               <span className='counter'>{sliderIndex+1} / {props.imgs.length}</span>
            </div>
            { props.text && <div className='text' >{props.text}</div>}
         </div>
      </div>
   )
}

export default Carousel;
