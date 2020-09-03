import React from 'react';
// import Carousel from '../carousel/carousel';
import './bodyHome.scss';

interface IBodyHome {
   logotype: any
}

const BodyHome = (props:IBodyHome) => {

   const {
      logotype,
   } = props
   
   return (
      <section className="o-home">
         <img  className="o-home__logo"
               src={ logotype.file.url } 
               alt={ logotype.file.url }
         />
      </section>
   )
};

export default BodyHome;
