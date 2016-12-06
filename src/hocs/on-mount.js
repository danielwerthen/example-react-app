import React from 'react';

export default function onMount(doFn) {
  return Component => {
    class WrappedComponent extends React.Component {
      componentWillMount() {
        doFn(this.props);
      }
      render() {
        return <Component {...this.props} />;
      }
    }
    const name = Component.displayName || Component.name || 'Component';
    WrappedComponent.displayName = `onMount(${name})`;
    return WrappedComponent;
  };
}
