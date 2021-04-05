import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type LayoutProps = {
    children : React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return <>
    <Header />
    <main className="layout">{children}</main>
    <Footer />
    </>
}