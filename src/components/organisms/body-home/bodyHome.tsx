import React from 'react';
import AboutBody from './../../molecules/about-body/aboutBody';
import WorkBody from './../../molecules/work-body/workBody'; 
import SharedBody from './../../molecules/shared-body/sharedBody';
import ContactBody from './../../molecules/contact-body/contactBody'; 
import './bodyHome.scss';

interface IBodyHome {
   logotype: any
}

const BodyHome = (props:IBodyHome) => {

   const {
      logotype,
   } = props
   
   return (
      <div className="o-home">
      
         <section id="section1" className="o-home__section">
            <AboutBody 
               idNum = {"01"}
               title = {"About"}
               img = {logotype}
            />
         </section>

         <section id="section2" className="o-home__section">
            <WorkBody
               idNum = {"02"} 
               title = {"Work"}
            />
         </section>

         <section id="section3" className="o-home__section">
            <SharedBody
               idNum = {"03"} 
               title = {"Shared"}
            />
         </section>

         <section id="section4" className="o-home__section">
            <ContactBody
               idNum = {"04"} 
               title = {"Contact"}
            />
         </section>

      </div>
   )
};

export default BodyHome;
