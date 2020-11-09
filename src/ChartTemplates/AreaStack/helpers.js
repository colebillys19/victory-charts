import React from 'react';

import CustomArea from './CustomArea';

export const idGen = () =>
  new Array(27).fill(null).reduce((a, v, i) => {
    return i % 2 === 0
      ? (a += String.fromCharCode(
          Math.ceil(Math.random() * 26) + 64,
        ).toLowerCase())
      : (a += Math.ceil(Math.random() * 9));
  }, '');

export const getAreaProps = ({
  activeX,
  color,
  data,
  focusedSegment,
  handleAreaClick,
  metric,
  name,
}) => {
  const [focusedArea, focusedXVal] = (focusedSegment &&
    focusedSegment.split('-')) || ['', ''];

  return {
    data,
    dataComponent: (
      <CustomArea
        activeX={activeX}
        focusedArea={focusedArea}
        focusedXVal={parseInt(focusedXVal, 10)}
        metric={metric}
        name={name}
      />
    ),
    events: [{ eventHandlers: { onClick: handleAreaClick }, target: 'data' }],
    name,
    style: { data: { fill: color } },
  };
};
