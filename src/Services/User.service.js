import axios from 'axios'
async function getDataUser(){
    const url="https://jsonplaceholder.typicode.com/users"
    return axios.get(url);
}
export default getDataUser;