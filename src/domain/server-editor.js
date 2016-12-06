import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import _ from 'lodash';
import * as actions from './action-creators';
import { withRouter } from 'react-router';
import compose from '../hocs/compose';

import Dialog from '../ui/dialog';
import ServerEditor from '../ui/server-editor';

const schema = {
  type: "object",
  required: ['name', 'protocol', 'port'],
  properties: {
    name: {
      type: 'string',
    },
    protocol: {
      type: 'string',
      enum: ['HTTP', 'HTTPS'],
    },
    port: {
      type: 'number',
    },
  }
};

function View({
  server,
  putResource,
  router,
}) {
  const handleSubmit = ({ formData }) =>
    putResource('virtualizations', server.virtualizationID, {
      ...server,
      ...formData,
    })
    .then(() => router.push('/'));
  return (<Dialog title="Edit">
    <ServerEditor
      server={server}
      schema={schema}
      onSubmit={handleSubmit}
    />
  </Dialog>);
}

const mapState = () => createSelector(
  (state, { params }) => {
    const list = _.get(state, 'resources.virtualizations.virtualizationList', []);
    return _.find(list, v => v.virtualizationID === params.id);
  },
  server => ({
    server,
    schema,
  }),
);

export default compose(
    connect(mapState, actions),
    withRouter,
  )(View);
