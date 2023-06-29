import axios from "axios";
//url: /movie/now_playing?api_key=28fca3339884e1997a3834cb8253cd9bfe24&lenguage=pt-BR
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})
export default api