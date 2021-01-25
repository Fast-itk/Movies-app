import React from 'react'
import {NavLink} from 'react-router-dom'

import classes from './Navbar.module.scss'

const cls = ['navbar-brand', classes.logo]

  

const Navbar = () => {
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
                    <form className="offset-xl-4 col-xl-4 d-flex">
                        <input className="form-control me-2 mr-2" type="search" placeholder="Введите название фильма" aria-label="Search"/>
                        <button className="btn btn-primary text-light" type="submit">Поиск</button>
                    </form>
                </div>
            </nav>
        </React.Fragment>

        // <React.Fragment>
        //     <nav className="navbar navbar-dark navbar-expand-lg bg-secondary container-fluid">
        //         <div className={cls.join(' ')}>mve</div>
        //         <ul className="navbar-nav">
        //             <li className="navbar-item">
        //                 <NavLink exact className="nav-link text-light" aria-current="page" to="/">Главная</NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <NavLink className="nav-link text-light" to="/favorites">Избранное</NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <NavLink className="nav-link text-light" to="/about">О нас</NavLink>
        //             </li>
        //         </ul>
        //         <form className="offset-5 col-4 d-flex">
        //             <input className="form-control me-2 mr-2" type="search" placeholder="Введите название фильма" aria-label="Search"/>
        //             <button className="btn btn-primary text-light" type="submit">Поиск</button>
        //         </form>
        //     </nav>
        // </React.Fragment>
       
    )
}

export default Navbar