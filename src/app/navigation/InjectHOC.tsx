import React from 'react';

function InjectHOC<Props, F>(WrappedComponent: React.FC<Props & F>, slices: F) {
  const ComponentWithExtraInfo = (props: Props) => {
    return <WrappedComponent { ...props } { ...slices } />;
  };
  return ComponentWithExtraInfo;
}

export default InjectHOC;
