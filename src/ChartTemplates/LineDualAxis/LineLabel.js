import React from 'react';
// import { VictoryLabel } from 'victory-core';

import { LabelTooltip } from './styledComponents';

const LineLabel = ({
  data,
  datum: { y: yVal },
  index,
  isOpaque,
  isPercentage,
  x,
  y,
}) => {
  const parsedIndex = parseInt(index, 10);
  const open = parsedIndex === 0 || parsedIndex === data.length - 1;

  return (
    <LabelTooltip
      opacity={isOpaque ? 0.3 : 1}
      open={open}
      placement={parsedIndex === 0 ? 'left' : 'right'}
      title={isPercentage ? `${yVal}%` : yVal}
      TransitionProps={{ timeout: 0 }}
    >
      <svg height={1} width={1} x={x} y={y} />
    </LabelTooltip>
  );
};

export default LineLabel;
