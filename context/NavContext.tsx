import { Dispatch, SetStateAction, createContext, useState } from "react"

type NAVPROVIDERTYPE = {
  isOpen : boolean,
  setIsOpen : Dispatch<SetStateAction<boolean>>
}

export const NavbarContext = createContext<NAVPROVIDERTYPE | null>(null);

export const NavbarProvider = ({children} : {children : any}) => {

    const [isOpen,setIsOpen] = useState<boolean>(false);

  return (
    <NavbarContext.Provider value={{isOpen,setIsOpen}}>
        {children}
    </NavbarContext.Provider>
  )
}
