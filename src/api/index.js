import axios from 'axios'

export const loginAccount = (data) => axios.post('/api/v1/users/register/', data);

export const getCategoriesAsync = (params) => axios.get('/api/v1/report/zone/?type=country&?name=中国', {
    params: params
});