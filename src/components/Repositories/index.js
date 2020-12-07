import React from 'react';
import star from '../../images/icons/star-icon.svg';
import './style.scss';

const Repositories = ({repo}) => {
    console.log(repo, 'REPOSITORIES');
     
    return (
        <ul className="page-details-repositories-wrap">
            <li className="page-details-repositories-item">
                <a className={"page-details-repositories-item-name " + (!repo.description ? ' margin ' : '')} href={repo.html_url} target="_blank">{repo.name}</a>
                {repo.description && <span className="page-details-repositories-item-subtitle">{repo.description}</span>}
                <span className="page-details-repositories-item-likes"><img src={star} /> {repo.stargazers_count}</span>
            </li>
        </ul>
    )
}

export default Repositories;