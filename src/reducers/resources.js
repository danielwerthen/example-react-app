import {
  RESOURCES_UPDATE,
} from './types';

function update(state, payload) {
  const {
    resource,
    data,
  } = payload;
  return {
    ...state,
    [resource]: data,
  };
}

export default function reduceResources(state = {}, action) {
  const {
    type,
    payload,
  } = action;
  if (type === RESOURCES_UPDATE) {
    return update(state, payload);
  }
  return state;
}
