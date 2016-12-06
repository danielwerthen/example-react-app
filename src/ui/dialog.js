import React from 'react';

import './dialog.css';

export default function Dialog({
  title,
  children,
  ...props,
}) {
  return (<div
    className="outer-dialog"
  >
    <div
      className="inner-dialog"
      {...props}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  </div>);
}
