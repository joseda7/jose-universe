import React from "react"
import './navMenu.scss'

const NavMenu = (props: NavMenuInterface) => {

	const {
		isMenuActive,
	} = props;

   // const tempCategories = [
	// 	{name: "About", href: "/"},
	// 	{name: "Work", href: "/"},
	// 	{name: "Shared", href: "/"},
	// 	{name: "Contact", href: "/"}
	// ]

	return (
		<nav className={`m-nav-menu ${isMenuActive?'':'m-nav-menu--hide'}`}>

		</nav>
	)
}

interface NavMenuInterface {
	isMenuActive: boolean,	
	categories?: any 
}

export default NavMenu
