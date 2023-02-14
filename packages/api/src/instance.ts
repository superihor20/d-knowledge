import Axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

export const axios = Axios.create({
  baseURL: process.env.API || process.env.NEXT_PUBLIC_API,
});

const authRequestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  console.log(localStorage);
  const updatedConfig = { ...config };
  const token =
    localStorage.getItem('accessToken') ||
    JSON.stringify(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZGFzZDNAZ21haWwuY29tIiwiaWQiOjQsImlhdCI6MTY3NjM4NTg0OSwiZXhwIjoxNjc2OTkwNjQ5fQ.PUuNp4h3Aywjp23mG_GBP6BwypltaoOQOLl8Q0-dWss'
    );
  if (token) {
    updatedConfig.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    console.log(updatedConfig);
  }

  console.log(updatedConfig);

  return updatedConfig;
};

axios.interceptors.request.use(authRequestInterceptor);

axios.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    throw error.response?.data;
  }
);
