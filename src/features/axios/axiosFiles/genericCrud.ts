import { axiosTokenInstance } from "../AxiosProtectedInstance";
import axiosInstance from "../AxiosPublicInstance";
import { InternalError } from "./axiosUtils";
import { createRequestQuery } from "./sagaCommon";

export const fetchDatas = (endpoint: string, params?: any) => {
  return new Promise<any>((resolve, reject) => {
    try {
      // const query = params ? createRequestQuery(params) : '';

      axiosTokenInstance()
        .get(`${endpoint}`, { params })
        .then(
          (response) => {
            return resolve(response?.data ?? response);
          },
          (err) => {
            return reject(err);
          }
        )
        .catch((error) => {
          return reject(InternalError(error));
        });
    } catch (error) {
      return reject({ status: 500, message: "fetchDatas error" });
    }
  });
};

// get one
export const fetchDataById = (idIri: string, params?: any) => {
  return new Promise((resolve, reject) => {
    try {
      const query = params ? createRequestQuery(params) : "";

      axiosTokenInstance()
        .get(`${idIri}${query}`)
        .then(
          (response) => {
            return resolve(response.data);
          },
          (err) => {
            return reject(err);
          }
        )
        .catch((error) => {
          return reject(InternalError(error));
        });
    } catch (error: any) {
      return reject({
        status: 500,
        message: "fetchDatasById error",
        error: { ...error },
      });
    }
  });
};

// create entity
export const postEntity = ({ endpoint, body, params }: PostEntity) => {
  return new Promise((resolve, reject) => {
    try {
      axiosTokenInstance()
        .post(endpoint, body, { params })
        .then(
          (response) => {
            return resolve(response.data);
          },
          (err) => {
            return reject(err);
          }
        )
        .catch((error) => {
          return reject(InternalError(error));
        });
    } catch (error: any) {
      return reject({
        status: 500,
        message: "postEntity error",
        error: { ...error },
      });
    }
  });
};

export const postEntityNoToken = ({
  endpoint,
  body,
}: {
  endpoint: string;
  body: { [x: string]: any }[];
}) => {
  return new Promise((resolve, reject) => {
    try {
      axiosInstance()
        .post(endpoint, body)
        .then(
          (response) => {
            return resolve(response.data);
          },
          (err) => {
            return reject(err);
          }
        )
        .catch((error) => {
          return reject(InternalError(error));
        });
    } catch (error: any) {
      return reject({
        status: 500,
        message: "postEntityNoToken error",
        error: { ...error },
      });
    }
  });
};

// update entity
export const updateEntity = ({ idIri, body, params }: UpdateEntity) => {
  return new Promise((resolve, reject) => {
    try {
      const query = params ? createRequestQuery(params) : "";

      axiosTokenInstance()
        .put(`${idIri}${query}`, body)
        .then(
          (response) => resolve(response.data),
          (err) => {
            return reject(err);
          }
        )
        .catch((error) => {
          return reject(InternalError(error));
        });
    } catch (error: any) {
      return reject({
        status: 500,
        message: "updateEntity error",
        error: { ...error },
      });
    }
  });
};

// delete entity
export const deleteEntity = (idIri: string) => {
  return new Promise((resolve, reject) => {
    try {
      axiosTokenInstance()
        .delete(idIri)
        .then(
          (response) => resolve(response.status),
          (err) => {
            return reject(err);
          }
        )
        .catch((error) => {
          return reject(InternalError(error));
        });
    } catch (error: any) {
      return reject({
        status: 500,
        message: "deleteEntity error",
        error: { ...error },
      });
    }
  });
};
