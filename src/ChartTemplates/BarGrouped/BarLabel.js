import React from 'react';

import BaseTooltip from './BaseTooltip';

const BarLabel = ({
  active,
  datum: { monthString, y: yVal },
  metric,
  x,
  y,
}) => (
  <BaseTooltip
    heading="Bar Tooltip"
    labelA="Metric"
    labelB="Value"
    open={!!active}
    placement="top"
    subHeading={monthString}
    TransitionProps={{ timeout: 0 }}
    valueA={metric}
    valueB={yVal}
    verticalOffset="8px"
  >
    <svg height={1} width={1} x={x} y={y} />
  </BaseTooltip>
);

export default BarLabel;
