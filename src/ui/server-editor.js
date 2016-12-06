import React from 'react';
import { Link } from 'react-router';
import Form from 'react-jsonschema-form';

import './server-editor.css';

export default function ServerEditor({
  server,
  ...rest,
}) {
  return (<div className="server-editor">
    <Form
      formData={server}
      {...rest}
    >
      <div className="buttons">
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <button type="submit">Ok</button>
      </div>
    </Form>
  </div>);
}
