import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://ess-backend-nfr8.onrender.com/";

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const get = <T = unknown>(url: string, config?: Parameters<typeof api.get>[1]) =>
  api.get<T>(url, config).then((r) => r.data);

export const post = <T = unknown>(url: string, data?: unknown, config?: Parameters<typeof api.post>[2]) =>
  api.post<T>(url, data, config).then((r) => r.data);

export const put = <T = unknown>(url: string, data?: unknown, config?: Parameters<typeof api.put>[2]) =>
  api.put<T>(url, data, config).then((r) => r.data);

export const patch = <T = unknown>(url: string, data?: unknown, config?: Parameters<typeof api.patch>[2]) =>
  api.patch<T>(url, data, config).then((r) => r.data);

export const del = <T = unknown>(url: string, config?: Parameters<typeof api.delete>[1]) =>
  api.delete<T>(url, config).then((r) => r.data);
