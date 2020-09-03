
import React from "react"
import "./buttonBurger.scss"

const ButtonBurger = (props: ButtonBurgerInterface) => {

	const {
		isMenuActive, 
		closeMenu, 
		openMenu
	} = props;

	return (  
		<button 
			className={`a-burger ${isMenuActive?'a-burger--active':''}`}
			type="button"
			onClick={() => {
				isMenuActive ? closeMenu() : openMenu()
			}}	
			>
				<span className={
					`a-burger__line ${isMenuActive?'a-burger__line--active':''}`
				}></span>
				<span className={
					`a-burger__line ${isMenuActive?'a-burger__line--active':''}`
				}></span>
				<span className={
					`a-burger__line ${isMenuActive?'a-burger__line--active':''}`
				}></span>
		</button>
)}

interface ButtonBurgerInterface {
   isMenuActive: boolean; 
	closeMenu: Function; 
	openMenu: Function; 
}

export default ButtonBurger
