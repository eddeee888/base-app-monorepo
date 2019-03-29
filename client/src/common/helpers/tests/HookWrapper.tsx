import React from 'react';

// @ts-ignore
function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  // @ts-ignore
  return <div hook={hook} />;
}

export default HookWrapper;
