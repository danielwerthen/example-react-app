import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import _ from 'lodash';
import * as actions from './action-creators';

function ServerEditor({ server }) {
  return <pre>{JSON.stringify(server, 10, '  ')}</pre>;
}

const mapState = () => createSelector(
  (state, { params }) => {
    const list = _.get(state, 'resources.virtualizations.virtualizationList', []);
    return _.find(list, v => v.virtualizationID === params.id);
  },
  server => ({ server })
);

export default connect(mapState)(ServerEditor);
