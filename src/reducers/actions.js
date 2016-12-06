import {
  RESOURCES_UPDATE,
} from './types';

export function updateResource(resource, data) {
  return {
    type: RESOURCES_UPDATE,
    payload: {
      resource,
      data,
    },
  };
}
