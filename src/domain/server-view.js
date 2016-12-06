import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import compose from '../hocs/compose';
import onMount from '../hocs/on-mount';
import * as actions from './action-creators';

function ServerView({ virts }) {
  return <pre>{JSON.stringify(virts, 10, '  ')}</pre>;
}

const mapState = () => createSelector(
  state => state.resources.virtualizations,
  virts => ({ virts })
);

export default compose(
  connect(mapState, actions),
  onMount(({ loadResource }) => loadResource('virtualizations')),
)(ServerView);
