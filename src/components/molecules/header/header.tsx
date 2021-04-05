import React from 'react';
import './header.scss';
import { IMG_LOGO_BLACK } from '../../../hooks/images';

interface HeaderInterface {
   isMenuActive:boolean;
   isDark?: boolean;
   actionTheme?: () => void;
}

const Header = ( props: HeaderInterface ) => {
   return (
      <header className={props.isMenuActive ? 'm-header m-header-open' : 'm-header' } >
         <div>
            <img src={IMG_LOGO_BLACK} alt='logo'/>
         </div>
      </header>
   )
}

export default Header;
