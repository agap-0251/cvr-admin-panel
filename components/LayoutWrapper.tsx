'use client'

import { NavbarProvider } from "@/context/navbarContext"

const LayoutWrapper = ({children} : any) => {
  return (
    <NavbarProvider>
        {children}
    </NavbarProvider>
  )
}

export default LayoutWrapper