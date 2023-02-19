import { AxiosInstance } from 'axios';
import { onFullfilledRequest, timeoutError } from './axiosUtils';
import { refreshTokenProcess } from './methods';

export const onRejectedProtectedResponse = (error: any) => {
  if (error.code === 'ECONNABORTED') {
    return Promise.reject(timeoutError(error));
  } else {
    const status = error?.response?.status;
    const message =
      error?.response?.data.message ??
      error?.response?.data.detail ??
      error?.response.data['hydra:description'] ??
      'aucun message';

    // console.log('error data', status, message);
    if (status === 401 && message === 'Expired JWT Token') {
      return refreshTokenProcess(error);
    } else {
      return Promise.reject({
        status,
        message,
        error: { ...error },
      });
    }
  }
};

export const setProtectedResponseInterceptor = (request: AxiosInstance) => {
  request.interceptors.response.use(
    onFullfilledRequest,
    onRejectedProtectedResponse
  );
};
