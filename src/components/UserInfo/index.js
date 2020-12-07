import React from 'react';
import organization from '../../images/icons/organization-icon.svg';
import star from '../../images/icons/star-icon.svg';
import location from '../../images/icons/location-icon.svg';
import repositorie from '../../images/icons/repositorie-icon.svg';
import followers from '../../images/icons/followers-icon.svg';
import './style.scss';

const UserInfo = ({data}) => {
    return (
        <div className="page-details-user">
            <div className="details-user-info">
                <a href={data.html_url} target="_blank"><img className="details-user-image" src={data.avatar_url}/></a>
                <a className="details-user-name" href={data.html_url} target="_blank">{data.name}</a>
                <span className="details-user-nickname">{data.login}</span>
                <span className="details-user-bio">{data.bio}</span>
                {data.email && <span className="details-user-email">{data.email}</span>}
            </div>

            <div className="details-user-more-info">
                <ul className="details-user-more-info-list">
                    {data.company && <li className="details-user-more-info-item">
                        <img src={organization}/>
                        <span>{data.company}</span>
                    </li>}

                    {data.location && <li className="details-user-more-info-item">
                        <img src={location}/>
                        <span>{data.location}</span>
                    </li>}

                    <li className="details-user-more-info-item">
                        <img src={star}/>
                        <span>1.000.000</span>
                    </li>

                    <li className="details-user-more-info-item">
                        <img src={repositorie}/>
                        <span>{data.public_repos}</span>
                    </li>

                    <li className="details-user-more-info-item">
                        <img src={followers}/>
                        <span>{data.followers}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserInfo;