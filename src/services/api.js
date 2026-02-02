import axios from 'axios';

//49480000/json/

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
});

export default api;