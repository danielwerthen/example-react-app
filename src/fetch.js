import 'whatwg-fetch';
import url from 'url';

const basePath = process.env.SERVER_BASE_PATH || 'http://localhost:8090/sv/v1/';

export function get(resource) {
  return fetch(url.resolve(basePath, resource))
    .then(res => res.json());
}
