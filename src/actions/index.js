import axios from 'axios';

const url = 'https://api.github.com/users/';

const _getUsers = async(valueInput) => {
    try {
        const user = await axios.get(url + valueInput)
        return user
    }catch(e){
        console.error("Error in request _getUser", e)
        return e.message
    }
}

const _getUserRepositories = async(valueInput) => {
    try {
        const repositories = await axios.get(url + valueInput + '/repos')
        return repositories
    }catch(e){
        console.error("Error in request _getUserRepositories", e)
        return e.message
    }
}


export {
    _getUsers,
    _getUserRepositories
};