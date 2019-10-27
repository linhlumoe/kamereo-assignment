import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const fetchGet = (url, queryObj, mockResult) => {
  const mock = new MockAdapter(axios, { delayResponse: 2000 });
  const config = {
    method: "get",
    url: url,
    params: queryObj
  };
  mock.onGet(url, config).reply(200, mockResult);
  return axios(config);
};

export const fetchPost = (url, payload) => {
  const config = {
    method: "post",
    url: url,
    data: payload
  };
  return axios(config);
};

export const fetchPut = (url, payload) => {
  const config = {
    method: "put",
    url: url,
    data: payload
  };
  return axios(config);
};
