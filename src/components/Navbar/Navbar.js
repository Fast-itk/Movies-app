import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'

import { SearchContext } from '../../context/search/searchContext'
import SearchList from '../SearchList.js/SearchList'
import classes from './Navbar.module.scss'

const cls = ['navbar-brand', classes.logo]

  

const Navbar = () => {

    const search = useContext(SearchContext)
    const {searchMovies, clearSearch} = search
    const {searchResults, searchValue, loadingSearch} = search.state

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary position-relative" style={{zIndex: 100}}>
                <div className="container-fluid">
                    
                    <NavLink className={cls.join(' ')} to="/">mve</NavLink>
                
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                aria-current="page" 
                                onClick={clearSearch} 
                                exact
                                to="/" 
                            >Главная</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/about" 
                                onClick={clearSearch}
                            >Информация</NavLink>
                        </li>
                    </ul>
                    <form className="offset-xl-5 col-xl-3">

                            <input 
                                className="form-control me-2 mr-2" 
                                type="search" 
                                placeholder="Введите название фильма" 
                                aria-label="Search"
                                onChange={(event) => searchMovies(event.target.value)}
                                value={searchValue}
                            />
                            
                    </form>
                </div>
            </nav>
            {
                searchValue.length > 0 ?
                <SearchList 
                    results={searchResults}  
                    loadingSearch={loadingSearch}
                    clear={clearSearch}
                />
                : null
            }
            
        </React.Fragment>
       
    )
}

export default Navbar