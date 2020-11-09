import React from 'react';
// import { VictoryLabel } from 'victory-core';

import BaseTooltip from './BaseTooltip';

const ScatterLabel = ({
  active,
  datum: { monthString, y: yVal },
  lineId,
  x,
  y,
}) => (
  <BaseTooltip
    heading="Scatter Tooltip"
    labelA="Value"
    open={!!active}
    placement="top"
    subHeading={monthString}
    TransitionProps={{ timeout: 0 }}
    valueA={lineId === 'number' ? yVal : `${yVal}%`}
    verticalOffset="2px"
  >
    <svg height={1} width={1} x={x} y={y} />
  </BaseTooltip>
);

export default ScatterLabel;
