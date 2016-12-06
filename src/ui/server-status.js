import React from 'react';
import { Link } from 'react-router';

import './server-status.css';

export default function ServerStatus({
  virtualizationID,
  apiType,
  name,
  protocol,
  port,
  running,
  onToggle,
}) {
  const path = `/${virtualizationID}`;
  return (<div className="server-status">
    <p>{name}</p>
    <p>{running ? 'Running' : 'Stopped'}</p>
    <p>{apiType}</p>
    <dl>
      <dt>port</dt><dd>{port}</dd>
      <dt>protocol</dt><dd>{protocol}</dd>
    </dl>
    <Link to={path}>Edit</Link>
    <span> </span>
    <a
      href={`${path}/${running ? 'stop' : 'start'}`}
      onClick={e => {
        e.preventDefault();
        onToggle(!running);
      }}>
      {running ? 'Stop' : 'Start'}
    </a>
  </div>);
}
