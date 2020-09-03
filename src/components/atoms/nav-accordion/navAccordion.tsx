import React, {useState, useEffect} from "react"
import './navAccordion.scss'

const NavAccordion = (props: NavAccordionInterface) => {

	const {
		category,
		index,
		setActiveItem,
		activeItem,
		isAnyActive,
		setIsAnyActive
	} = props;

	const [isActive, toggleActive] = useState(false);

	useEffect(()=>{
		index !== activeItem && toggleActive(false)
	}, [activeItem])

	return (
			
		<div className='a-nav-accord'>	
			<button className={`
						a-nav-accord__btn ${isActive?'a-nav-accord__btn--active':''} ${!isAnyActive && index!==activeItem?'a-nav-accord__btn--locked':''}
					`}
					onClick={ () => {
						setActiveItem(index)
						toggleActive(!isActive)
						setIsAnyActive(isActive)
					} 
				}>
				{category.nombreCategoria}
				<span className='a-nav-accord__btn-icon'></span> 
			</button>
			<ul className={ 
				`a-nav-accord__sub ${isActive && index === activeItem? 'a-nav-accord__sub--active':''}`
				}>
				<li> Encontrarás </li>
				{ 	category.referenciaSubcategorias && category.referenciaSubcategorias.map((subcat, k)=>(
					<li key={ `cat${k}` }> 
						<a href={`/${subcat.slug}`}> { subcat.nombreSubcategoria } </a>
					</li>
				))}
			</ul>
			
		</div>
	)
}

interface NavAccordionInterface {
	category: any,
	index: number,
	setActiveItem: Function,
	activeItem: number,
	isAnyActive: boolean,
	setIsAnyActive: Function
}

export default NavAccordion
