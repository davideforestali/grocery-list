import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://grocery-list-test-f11f0-default-rtdb.europe-west1.firebasedatabase.app/' 
})

export default instance