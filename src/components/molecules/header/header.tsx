import React from 'react';
import './header.scss';
import { IMG_COMFAMA_GRAY, IMG_COMFAMA_MAGENTA } from '../../../hooks/images';

//import { Link } from 'gatsby'
interface HeaderInterface {
   isDark: boolean;
   isMenuActive:boolean;
   actionTheme: () => void;
}

const Header = ( props: HeaderInterface ) => {
   return (
      <header className={props.isMenuActive ? 'm-header m-header-open' : 'm-header' } >
         <div>
            <img src={props.isMenuActive ? IMG_COMFAMA_MAGENTA : IMG_COMFAMA_GRAY} alt='logo'/>
         </div>
         <div>
            <i className='hide-mobile icon icon-font-change-2' />
            <i 
               className={`hide-mobile icon ${ props.isDark ? 'icon-sun' : 'icon-moon' }`} 
               onClick={props.actionTheme}
            />
            <i className='icon icon-search' />
            <i className='icon icon-user hide-desktop' />
         </div>
      </header>
   )
}

export default Header;
