import React from "react"
import './navMenu.scss'

const NavMenu = (props: NavMenuInterface) => {

	const {
      isMenuActive,
      closeMenu
	} = props;

   const tempCategories = [
		{name: "About", href: "/"},
		{name: "Work", href: "/"},
		{name: "Shared", href: "/"},
		{name: "Contact", href: "/"}
	]

	return (
		<nav className={`m-nav-menu ${isMenuActive?'':'m-nav-menu--hide'}`}>
         
         <div className='m-nav-menu__cont'>
            <div className='m-nav-menu__image'>
               <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Circle_%28transparent%29.png" alt=""/>
            </div>
            <ul className='m-nav-menu__list'>
               { tempCategories && tempCategories.map((category, i)=>(
                  <li key={`category${i}`}> 
                     <button onClick={ closeMenu }>
                        <span>{`0${i+1}`}</span> { category.name }
                     </button>
                  </li>
               ))}
            </ul>
         </div>
		</nav>
	)
}

interface NavMenuInterface {
   isMenuActive: boolean,
   closeMenu?: () => any,	
	categories?: any 
}

export default NavMenu
