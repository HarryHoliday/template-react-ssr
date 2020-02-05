import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { iRootState } from '~shared/configureStore';

const DEFAULT_METHOD = 'post' as 'post';
const TIMEOUT = 10 * 60 * 1000; // 10minutes
//
axios.defaults.withCredentials = true;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = '/api';
//
const errorHandler = (error: AxiosError): void => {
  // console.log('====================================');
  // console.log(error.code);
  // console.log(error.config);
  // console.log(error.isAxiosError);
  // console.log(error.message);
  // console.log(error.name);
  // console.log(error.request);
  // console.log(error.response);
  // console.log(error.stack);
  // console.log('====================================');
  throw error;
};
//
export default async (
  { url, method = DEFAULT_METHOD, data, headers = {} }: AxiosRequestConfig,
  rootState: iRootState,
): Promise<AxiosResponse> => {
  try {
    // prettier-ignore
    const { app: { csrfToken } } = rootState;
    const result = await axios({
      headers: {
        'x-xsrf-token': csrfToken,
        'Content-Type': 'application/json',
        ...headers,
      },
      url,
      method,
      data,
    });
    return result.data;
  } catch (error) {
    throw errorHandler(error);
  }
};
