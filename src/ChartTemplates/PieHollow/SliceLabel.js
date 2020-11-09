import React from 'react';

import BaseTooltip from './BaseTooltip';

const SliceLabel = ({ active, datum: { x: xVal, y: yVal } }) => (
  <BaseTooltip
    heading="Pie Tooltip"
    labelA="Value"
    open={!!active}
    placement="right"
    subHeading={xVal}
    TransitionProps={{ timeout: 0 }}
    valueA={yVal}
  >
    <svg height={1} width={1} x={140} y={70} />
  </BaseTooltip>
);

export default SliceLabel;
