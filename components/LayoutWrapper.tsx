'use client'

import { NavbarProvider } from "@/context/NavContext"

const LayoutWrapper = ({children} : any) => {
  return (
    <NavbarProvider>
        {children}
    </NavbarProvider>
  )
}

export default LayoutWrapper