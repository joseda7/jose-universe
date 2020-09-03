
import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import ButtonBurger from "../../atoms/button-burger/buttonBurger"
import NavMenu from "../../molecules/nav-menu/navMenu"
import "./nav.scss"

interface NavInterface {
   isMenuActive:boolean,
   setMenuActive:(isMenuActive: boolean ) => void
}

const Nav = ( {isMenuActive, setMenuActive}: NavInterface) => {
	// const data = useStaticQuery(graphql`
	// 	query CATEGORIES {
	// 		allContentfulMenu {
	// 			nodes {
	// 				categorias {
	// 					nombreCategoria
	// 					referenciaSubcategorias {
	// 						nombreSubcategoria
	// 						slug
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `)

	// const { categorias } = data.allContentfulMenu.nodes[0]

	const tempSideLinks = [
		{name: "1", icon:"", href: "/"},
		{name: "2", icon:"", href: "/"},
		{name: "3", icon:"", href: "/"},
		{name: "4", icon:"", href: "/"},
   ]
   
	const freezePage = () => {
		document.body.classList.add("freeze-page")
	}
	const openMenu = () => {
		freezePage()
		setMenuActive(true)
	}
	const closeMenu = () => {
		freezePage()
		setMenuActive(false)
	}

	return (
		<div className='o-nav'>
			<section className='o-nav__bar'>
				<ButtonBurger 
					isMenuActive={ isMenuActive }
					closeMenu={ closeMenu }
					openMenu={ openMenu }
				/>	

				<ul className='o-nav__bar-links'>
					{ tempSideLinks && tempSideLinks.map((item, i)=>(
						<li key={`link${i}`}>
							<a href={item.href}></a>
						</li>
					))}
				</ul>
			</section>

			<NavMenu
				isMenuActive={ isMenuActive }
			/>
			
		</div>
)}


export default Nav
