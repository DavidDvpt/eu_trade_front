import { call } from '@redux-saga/core/effects';
import axios from 'axios';
import store from '../../App/store';
import { authActions } from '../../features/auth/authSlice';
import { fetchRefreshToken } from '../../features/auth/requests';
import { setTokensIntoLocalStorage } from '../../features/auth/utils';

export const refreshTokenProcess = async (error: any) => {
  const { refreshToken } = store.getState().auth;
  const config = error.config;

  // config._retry for retry only 1 time
  if (!config._retry) {
    try {
      if (
        refreshToken &&
        (refreshToken === 'null' || refreshToken === 'undefined')
      ) {
        return Promise.reject(error);
      }
      // refreshToken request
      config._retry = true;
      const result = fetchRefreshToken(refreshToken);

      return result.then(
        (response) => {
          // store new tokens in local storage
          setTokensIntoLocalStorage(response.token, response.refreshToken);

          // store new token in store
          store.dispatch(
            authActions.setTokens({
              token: response.token,
              refreshToken: response.refreshToken,
            })
          );

          // retry last request with error 401
          return new Promise((resolve, reject) => {
            config.headers['Authorization'] = `Bearer ${response.token}`;
            axios(config)
              .then((res) => {
                return resolve(res);
              })
              .catch((error) => {
                return reject(error);
              });
          });
        },
        //if refresh_token 401
        (err) => {
          if (err.status === 401 && err.error.config.url === '/refresh_token') {
            store.dispatch(authActions.refreshTokenFail(true));
          } else {
            return Promise.reject(err);
          }
        }
      );
    } catch (error) {
      return Promise.reject(error);
    }
  } else {
    return Promise.reject(error);
  }
};
// use pagination of jsonId
export function* genericPagingTraitment(
  request: any,
  endpoint: any,
  params: any = {}
): any {
  const memberTabArray = [];
  let isLoop = false;
  let page = 1;

  do {
    params.page = page;
    const response = yield call(request, endpoint, params);
    memberTabArray.push(response['hydra:member']);
    if (response['hydra:view'] && response['hydra:view']['hydra:next']) {
      isLoop = true;
      page += 1;
    } else {
      isLoop = false;
    }
  } while (isLoop);

  return memberTabArray.flat(1);
}
