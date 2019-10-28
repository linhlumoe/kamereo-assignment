import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 1000 });

export const fetchData = (url, payload, mockResult) => {
  mock.reset();
  const config = {
    method: 'get',
    url: url,
    data: payload,
  };
  mock.onGet(url, config).reply(200, mockResult);
  return axios(config);
};
