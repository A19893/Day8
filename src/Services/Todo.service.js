import axios from 'axios'
async function getTodo(){
const url=`https://jsonplaceholder.typicode.com/todos`
return axios.get(url);
}
export default getTodo;