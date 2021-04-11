import React from 'react'
import './contactBody.scss'

interface IContactBody {
   idNum: string,
   title: string,
}

const ContactBody = (props:IContactBody) => {

   const {
      idNum,
      title
   } = props;

   return (
      <div className="m-contact-body">
         <h2 className="title-secondary"> 
            <span> {idNum} </span>
            {title} 
         </h2>
         <p>
            LLorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum sed praesentium cum eius numquam est ea similique neque aliquid quam quasi saepe reprehenderit, placeat expedita molestias assumenda! Consectetur, nostrum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum sed praesentium cum eius numquam est ea similique neque aliquid quam quasi saepe reprehenderit, placeat expedita molestias assumenda! Consectetur, nostrum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum sed praesentium cum eius numquam est ea similique neque aliquid quam quasi saepe reprehenderit, placeat expedita molestias assumenda! Consectetur, nostrum.
         </p>
      </div>
   )
}

export default ContactBody;
