import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import { SearchContext } from '../../context/search/searchContext'


import classes from './Navbar.module.scss'

const cls = ['navbar-brand', classes.logo]

  

const Navbar = () => {

    const search = useContext(SearchContext)
    const {searchMovies} = search
    const {searchResults} = search.state

    console.log(searchResults)

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    
                    <NavLink className={cls.join(' ')} to="/">mve</NavLink>
                
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" aria-current="page" to="/">Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/favorites">Избранное</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">Информация</NavLink>
                        </li>
                    </ul>
                    <form className="offset-xl-4 col-xl-3 d-flex">

                            <input 
                                className="form-control me-2 mr-2" 
                                type="search" 
                                placeholder="Введите название фильма" 
                                aria-label="Search"
                                onChange={(event) => searchMovies(event.target.value)}
                            />
                            <button className="btn btn-primary text-light" type="submit">Поиск</button>

                    </form>
                </div>
            </nav>
        </React.Fragment>
       
    )
}

export default Navbar