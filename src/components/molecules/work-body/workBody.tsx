import React from 'react'
import './workBody.scss'

interface IWorkBody {
   idNum: string,
   title: string,
}

const WorkBody = (props:IWorkBody) => {

   const {
      idNum,
      title
   } = props;

   return (
      <div className="m-work-body">
         <h2 className="title-secondary"> 
            <span> {idNum} </span>
            {title} 
         </h2>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum sed praesentium cum eius numquam est ea similique neque aliquid quam quasi saepe reprehenderit, placeat expedita molestias assumenda! Consectetur, nostrum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum sed praesentium cum eius numquam est ea similique neque aliquid quam quasi saepe reprehenderit, placeat expedita molestias assumenda! Consectetur, nostrum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum sed praesentium cum eius numquam est ea similique neque aliquid quam quasi saepe reprehenderit, placeat expedita molestias assumenda! Consectetur, nostrum.
         </p>
      </div>
   )
}

export default WorkBody;
