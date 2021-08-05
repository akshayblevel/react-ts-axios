const axios = require('axios');

export function httpGet(url: string) {
  debugger;
  return axios.get(url);
}

export function httpPost(url: string, args: any) {
  return axios({
    method: 'post',
    url,
    data: args
  });
}

export function httpDelete(url: string) {
  return axios.delete(url);
}
