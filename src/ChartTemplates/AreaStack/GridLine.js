import React from 'react';
import { LineSegment } from 'victory-core';

const GridLine = ({ index, style, x1, x2, y1, ...restProps }) => (
  <LineSegment
    {...restProps}
    style={{ ...style, stroke: index === 0 ? 'transparent' : '#dcdcdc' }}
    x1={x1 - 16}
    x2={x2 - 16}
    y1={y1 + 3}
  />
);

export default GridLine;
