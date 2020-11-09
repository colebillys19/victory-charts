import React from 'react';

import BaseTooltip from './BaseTooltip';

const Label = ({ datum: { monthString, y: yVal }, x, y }) => (
  <BaseTooltip
    heading="Voronoi Tooltip"
    labelA="Value"
    open
    placement="top"
    subHeading={monthString}
    TransitionProps={{ timeout: 0 }}
    valueA={yVal}
    verticalOffset="2px"
  >
    <svg height={1} width={1} x={x} y={y} />
  </BaseTooltip>
);

export default Label;
