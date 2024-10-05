import axios from 'axios';

const api_url = import.meta.env.VITE_API_URL || 'http://localhost:8080';
const gif_api_key = import.meta.env.VITE_GIF_API;

export const getPuns = (punPrompt) => {
    return axios.get(`${api_url}/?punPrompt=${punPrompt}`);
}

export const getGif = (punPrompt) => {
    return axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${gif_api_key}&tag=${punPrompt}`);
}