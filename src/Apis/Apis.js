import axios from "axios";
export const BASEURL = "http://localhost:8000/";


const fetchClient = () => {
    const defaultOptions = {
        baseURL: 'http://localhost:8000',
        // timeout: 20000,
        headers: {
            "Content-Type": "application/json",
        }
    }
    const instance = axios.create(defaultOptions);
    instance.interceptors.request.use(config => {
        config.headers['access-token'] = 123456 //localStorage.jwtToken;
        config.headers['userId'] = 100 //localStorage.userId;
        config.headers['timeZone'] = Intl.DateTimeFormat().resolvedOptions().timeZone
        return config;
    })
    return instance;
}
export default fetchClient();