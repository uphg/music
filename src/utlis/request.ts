import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// 定义响应数据类型
interface UserData {
  id: number;
  name: string;
  email: string;
}

// 定义 Axios 响应类型
export type AxiosResponseWithData<T> = AxiosResponse<{
  code: number;
}>;


const instance = axios.create({
  baseURL: 'https://ncm.icodeq.com/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    // 在请求发送之前做些什么
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // 在响应数据之前做些什么
    return response?.data;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

const ajax = {
  get<T=any>(url: string, config?: AxiosRequestConfig<any>) {
    return instance.get(url, config) as Promise<T>
  },
  post<T=any, P=any>(url: string, data: P, config?: AxiosRequestConfig<any>) {
    return instance.post(url, data, config) as Promise<T>
  },
  put<T=any, P=any>(url: string, data: P, config?: AxiosRequestConfig<any>) {
    return instance.put(url, data, config) as Promise<T>
  },
  delete<T=any>(url: string, config: AxiosRequestConfig<any>) {
    return instance.delete(url, config) as Promise<T>
  }
}

export default ajax