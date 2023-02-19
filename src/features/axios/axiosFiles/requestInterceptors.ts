import store from '../../App/store';

export const requestInterseptor = (config: any) => {
  const { token } = store.getState().auth;
  try {
    config.headers.common.Authorization = 'Bearer ' + token;
    return config;
  } catch (error) {
    console.log(error);
  }
};
