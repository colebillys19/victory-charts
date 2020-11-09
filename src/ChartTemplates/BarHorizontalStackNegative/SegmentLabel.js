import React from 'react';

import BaseTooltip from './BaseTooltip';

const SegmentLabel = ({ active, datum: { value }, metric, x, y }) => (
  <BaseTooltip
    heading="Bar Segment Tooltip"
    labelA="Value"
    open={!!active}
    placement="top"
    subHeading={metric}
    TransitionProps={{ timeout: 0 }}
    valueA={value}
    verticalOffset="-7px"
  >
    <svg height={1} width={1} x={x} y={y} />
  </BaseTooltip>
);

export default SegmentLabel;
