import { get } from '../fetch';
import { updateResource } from '../reducers/actions';

export function loadResource(resource) {
  return (dispatch) => {
    return get(resource)
      .then(data =>
        dispatch(updateResource(resource, data)));
  };
}
