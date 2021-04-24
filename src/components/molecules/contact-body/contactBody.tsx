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
         <span> | Let's transform reality together </span>
         </h2>
         <p>
            jose.david.alcaraz@gmail.com
         </p>
         <span class="dot"></span>
      </div>
   )
}

export default ContactBody;
