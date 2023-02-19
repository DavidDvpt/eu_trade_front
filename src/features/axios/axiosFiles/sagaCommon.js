import { put } from '@redux-saga/core/effects';
import { logoutThunk } from '../../features/auth/authThunks';
// import { appManagerActions } from '../appManager/actions';

export const createRequestQuery = (queries) => {
  if (!queries) {
    return '';
  }

  let query = '?';
  const keys = Object.keys(queries);

  keys.forEach((element, i) => {
    query += element + '=' + queries[element];
    if (i < keys.length - 1) {
      query += '&';
    }
  });

  return query;
};

export default function* onErrorLogout(error) {
  if (!error) {
    console.log('erreur de connexion api error = undefined');
    return null;
  }
  console.log('error', error, error.message);
  const {
    request: { status },
  } = error;

  if (status === 401) {
    yield put(logoutThunk());
  }
}
