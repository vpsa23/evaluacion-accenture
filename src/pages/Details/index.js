import React, { useState, useEffect} from 'react';
import { _getUserRepositories } from '../../actions';
import Search from '../../components/Search';
import { withRouter } from 'react-router-dom';
import Repositories from '../../components/Repositories';
import style from './style.scss';
import UserInfo from '../../components/UserInfo';

const Details = (props) => {
    const user = props.location.user;
    const data = user ? user.data : props.history.push('/');
    const [repos, setRepos] = useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if(data) _requestRepo()
    }, [data])

    const _requestRepo = async() => {
        const repositories = await _getUserRepositories(data.login);
        setLoader(true);

        if(repositories.status === 200){
            setLoader(false);

            repositories.data.sort((a,b) => {
                if(a.stargazers_count < b.stargazers_count) {
                    return 1;
                }
                if(a.stargazers_count > b.stargazers_count) {
                    return -1;
                }

                return 0;
            });

            setRepos(repositories);
        }
    }

    return (
        <div className="page-details">
            <Search />

            <div className="page-details-general-info-user">
                {data && <UserInfo data={data}/>}

                <div className="page-details-repositories">
                    {repos && repos.data && repos.data.map((item, i) => {
                        return (
                            <Repositories repo={item} key={i}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default withRouter(Details);