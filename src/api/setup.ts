import axios from 'axios';

export const myWeatherApi = axios.create({
  baseURL: 'https://weather-api.xires.workers.dev',
});

// myWeatherApi.interceptors.request.use((request) => {
//   console.log(`Starting Request (${Date.now()}):`, JSON.stringify(request, null, 2));
//   return request;
// });
