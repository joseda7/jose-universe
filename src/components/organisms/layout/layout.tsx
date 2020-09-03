/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import "./layout.scss";
import Nav from "../nav/nav"
// import Header from '../../molecules/header/header';
// import useChangeTheme from "../../../hooks/useChangeTheme";

interface LayoutInterface {
   children: any;
}

const Layout = ({ children }: LayoutInterface) => {

   const [isMenuActive, setMenuActive] = useState(false)
   // const [isDark, changeDarkMode] = useChangeTheme();

   return (
      <>
         {/* <Header isMenuActive={isMenuActive} isDark={isDark} actionTheme={changeDarkMode}/>*/}
         <Nav isMenuActive={isMenuActive} setMenuActive={setMenuActive} /> 
         <div>
            <main>{children}</main>
         </div>
      </>
   )
}

export default Layout;
