import axios, { AxiosInstance, AxiosResponse } from 'axios';

export const InternalError = (error: any): APIError => {
  return {
    message: 'Erreur durant le requetage',
    status: 500,
    error: { ...error },
  };
};

export const timeoutError = (error: any): APIError => {
  return { message: 'timeout', status: 500, error: { ...error } };
};

export const error504Traitment = async (config: any) => {
  return await new Promise((resolve, reject) => {
    axios(config)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const onFullfilledRequest = (response: AxiosResponse) => {
  return response;
};

export const onRejectedPublicResponse = (error: any) => {
  const status = error?.response?.data?.code;
  const message = error?.response?.data?.message;

  if (status) {
    switch (status) {
      case 504:
        error504Traitment(error.config)
          .then((response) => response)
          .catch((err) => err);
        break;
      default:
        return Promise.reject({
          status,
          message,
          error: { ...error },
        });
    }
  } else {
    return Promise.reject<APIError>(InternalError);
  }
};

export const setPublicResponseInterceptor = (request: AxiosInstance) => {
  request.interceptors.response.use(onFullfilledRequest, onRejectedPublicResponse);
};
