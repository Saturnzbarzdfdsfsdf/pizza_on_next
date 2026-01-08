import axios from 'axios';


export const axiosInstances = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})