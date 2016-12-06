import path from 'path';
import { get, put } from '../fetch';
import { updateResource } from '../reducers/actions';

export function loadResource(resource) {
  return (dispatch) => {
    return get(resource)
      .then(data =>
        dispatch(updateResource(resource, data)));
  };
}

export function putResource(resource, id, body) {
  return dispatch => 
    put(path.join(resource, id), body)
      .then(() => dispatch(loadResource(resource)));
}
