import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import compose from '../hocs/compose';
import onMount from '../hocs/on-mount';
import * as actions from './action-creators';

import ServerStatus from '../ui/server-status';

function ServerView({ servers, putResource, children }) {
  const toggleServer = (server, running) =>
    putResource('virtualizations', server.virtualizationID, {
      ...server,
      running,
    });
  return React.createElement(
    'div',
    {},
    ...servers
      .map(server => ({
        ...server,
        onToggle: toggle => toggleServer(server, toggle),
      }))
      .map(ServerStatus),
    children,
  );
}

const mapState = () => createSelector(
  state => _.get(state, 'resources.virtualizations.virtualizationList', []),
  servers => ({ servers })
);

export default compose(
  connect(mapState, actions),
  onMount(({ loadResource }) => loadResource('virtualizations')),
)(ServerView);
