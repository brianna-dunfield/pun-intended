import axios from 'axios';

const api_url = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const getPuns = (punPrompt) => {
    return axios.get(`${api_url}/?punPrompt=${punPrompt}`);
}

