import React from 'react';

const ConditionalRender = ({ Component, shouldRender }) => {
  if (shouldRender) {
    const isStyledComponent =
      typeof Component === 'object' && !!Component.styledComponentId;

    if (typeof Component === 'function' || isStyledComponent) {
      return <Component />;
    }
    return Component;
  }

  return null;
};

export default ConditionalRender;
