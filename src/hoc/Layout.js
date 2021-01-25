import React from 'react'
import classes from './Layout.module.scss'

import NavBar from '../components/Navbar/Navbar'

const cls = ['bg-light', classes.layout]

const Layout = ({ children }) => {
    return (
        <div className={cls.join(' ')}>
            <NavBar/>

            <main>
                { children }
            </main>
        </div>
    )
}

export default Layout