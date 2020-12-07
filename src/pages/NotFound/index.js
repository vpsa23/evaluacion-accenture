import React from 'react';
import Search from '../../components/Search';
import style from './style.scss';

const NotFound = () => {
    return (
        <div className="page-not-found">
            <Search />

            <div className="user-not-found">User not found :(</div>
        </div>
    )
}

export default NotFound;