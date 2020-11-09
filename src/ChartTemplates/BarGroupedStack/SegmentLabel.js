import React from 'react';

import BaseTooltip from './BaseTooltip';

const SegmentLabel = ({
  active,
  datum: { monthString, y: yVal },
  metric,
  x,
  y,
}) => (
  <BaseTooltip
    heading="Bar Segment Tooltip"
    labelA="Metric"
    labelB="Value"
    open={!!active}
    placement="top"
    subHeading={monthString}
    TransitionProps={{ timeout: 0 }}
    valueA={metric}
    valueB={yVal}
    verticalOffset="2px"
  >
    <svg height={1} width={1} x={x} y={y} />
  </BaseTooltip>
);

export default SegmentLabel;
