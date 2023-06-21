import axios from 'axios'
async function getComments(){
    const url='https://jsonplaceholder.typicode.com/comments'
    return axios.get(url);
}
export default getComments;