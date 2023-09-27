'use client'

import { NavbarProvider } from "@/context/navbarContext"

const LayoutWrapper = ({children}) => {
  return (
    <NavbarProvider>
        {children}
    </NavbarProvider>
  )
}

export default LayoutWrapper