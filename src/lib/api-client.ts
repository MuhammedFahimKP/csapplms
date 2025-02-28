import axios, {
  AxiosError,
  CanceledError,
  type AxiosRequestConfig,
} from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_SERVER_URL,
});

export default apiClient;

export {
  AxiosError as ApiClientError,
  CanceledError as ApiClientCanceledError,
};
export type { AxiosRequestConfig as ApiClientConfig };
