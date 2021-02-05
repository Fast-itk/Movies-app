import React from 'react'

import SearchItem from './SearchItem/SearchItem'
import Loading from '../Loading/Loading'
import cls from './SearchList.module.scss'


const SearchList = ({results, loadingSearch, clear}) => {

    const lists = results.map((movie, index) => {
        if (index < 6) {
            return (
                <SearchItem 
                    key={index}
                    image={movie.poster}
                    title={movie.title}
                    id={movie.id}
                    clear={clear}
                />
            )
        } else return null
    })

    return (
        <div className={
            ['bg-secondary', 'row', 'd-flex', 'justify-content-center', 'align-items-center', 'py-4', 'border-top', cls.searchList].join(' ')}
        >
            {loadingSearch 
                ? <Loading />
                : results.length === 0 
                ? <h2 className="text-light">По вашему запросу ничего не найдено. Попробуйте еще!</h2> 
                : lists
            }
        </div>
    )
}

export default SearchList