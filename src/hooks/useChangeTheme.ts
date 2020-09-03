import { useState } from "react";

const useChangeTheme = () : Array<any> => {
   
   const classDarkTheme = 'dark-theme';
   const [isDark, setIsDark] = useState<boolean>(false);

   const changeDarkMode = () => {
      if(!isDark ) {
         document.querySelector('body')?.setAttribute('class', classDarkTheme);
      } else {
         document.querySelector('body')?.removeAttribute('class');
      }
      setIsDark( document.querySelector('body')?.classList.contains(classDarkTheme) || false );
   }
   return [isDark, changeDarkMode];
}

export default useChangeTheme;
