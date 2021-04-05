import React from 'react'
import './aboutBody.scss'

interface IAboutBody {
   idNum: string,
   title: string,
   img: any
}

const AboutBody = (props:IAboutBody) => {
   const {
      idNum,
      title,
      img
   } = props

   return (
      <div className="m-about-body">
         <h2 className="title-secondary">
            <span> {idNum} </span>
            { title } 
         </h2>
         <img  className="m-about-body__image"
               src={ img.file.url } 
               alt={ img.file.url }
         />
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum sed praesentium cum eius numquam est ea similique neque aliquid quam quasi saepe reprehenderit, placeat expedita molestias assumenda! Consectetur, nostrum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum sed praesentium cum eius numquam est ea similique neque aliquid quam quasi saepe reprehenderit, placeat expedita molestias assumenda! Consectetur, nostrum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum sed praesentium cum eius numquam est ea similique neque aliquid quam quasi saepe reprehenderit, placeat expedita molestias assumenda! Consectetur, nostrum.
         </p>
      </div>
   )
}

export default AboutBody;
