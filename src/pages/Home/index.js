import React from 'react';
import Search from '../../components/Search';
import {withRouter} from 'react-router-dom';
import style from './style.scss';

const Home = (props) => {
    return (
        <div className="page-home">
            <Search {...props}/>
        </div>
    )
}

export default withRouter(Home);