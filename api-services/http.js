import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 50000,
  headers: {
    Accept: "application/json",
    // 'Content-Type': 'application/json',
  },
});

Axios.interceptors.request.use(
  // @ts-ignore
  (config) => {
    return {
      ...config,
      headers: {
        ...config.headers,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    //  ...
    return response;
  },
  (error) => {
    //  ...
    return Promise.reject(error);
  }
);

export class HttpClient {
  static async get({ url, params }) {
    const response = await Axios.get(url, { params });
    return response.data;
  }

  static async post({ url, data, options }) {
    const response = await Axios.post(url, data, options);
    return response.data;
  }

  static async put({ url, data }) {
    const response = (await Axios.put) < T > (url, data);
    return response.data;
  }

  static async patch({ url, data }) {
    const response = await Axios.patch(url, data);
    return response.data;
  }

  static async del({ url }) {
    const response = await Axios.delete(url);

    return response.data;
  }
}
