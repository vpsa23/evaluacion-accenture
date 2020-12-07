import React, {useState} from 'react';
import { _getUsers } from '../../actions';
import { withRouter, Route} from 'react-router-dom';
import searchIcon from '../../images/icons/search-icon.svg';
import './style.scss';


const Search = (props) => {
    const[valueInput, setValueInput] = useState('');

    const handleChange = (event) => {
        setValueInput(event.target.value);
    }

    const requestUser = async () => {
        const user = await _getUsers(valueInput);
        if(user.status === 200){
            return props.history.push({
                pathname: '/details', 
                user: user
            });
        }else{
            return props.history.push({
                pathname: '/not-found',
                user: ''
            })
        }
    }

    return (
        <div className="search-component">
            <div className="page-home-title">
                <span className="page-home-title-github" onClick={() => props.history.push('/')}>Github</span>
                <span className="page-home-title-search" onClick={() => props.history.push('/')}>Search</span>
            </div>

            <div className="search-wrap">
                <input className="search-input" onChange={(event) => handleChange(event)} placeholder="Busca un nickname ej.: vpsa23"/>
                <button className="search-icon-box" onClick={() => requestUser()} ><img src={searchIcon}/></button>
            </div>
        </div>
    )
}

export default withRouter(Search);