import { createContext, useState } from "react"

export const NavbarContext = createContext();

export const NavbarProvider = ({children}) => {

    const [isOpen,setIsOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{isOpen,setIsOpen}}>
        {children}
    </NavbarContext.Provider>
  )
}
