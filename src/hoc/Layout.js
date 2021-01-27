import React, {useContext} from 'react'
import classes from './Layout.module.scss'

import NavBar from '../components/Navbar/Navbar'
import { SearchContext } from '../context/search/searchContext'
import Overlay from '../components/Overlay/Overlay'

const cls = ['bg-light', classes.layout]

const Layout = ({ children }) => {

    const search = useContext(SearchContext)
    const {searchValue} = search.state

    return (
        <div className={cls.join(' ')}>
            <NavBar/>
            <main>
                { children }
                {
                    searchValue.length > 0 
                    ? <Overlay 
                        clear={search.clearSearch}
                    /> 
                    : null
                }     
            </main>
        </div>
    )
}

export default Layout