import React from 'react'
import './sharedBody.scss'

interface ISharedBody {
   idNum: string,
   title: string,
}

const SharedBody = (props:ISharedBody) => {

   const {
      idNum,
      title
   } = props;

   return (
      <div className="m-shared-body">
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

export default SharedBody;
