import React from 'react';

import { LabelTooltip } from './styledComponents';

const LineLabel = ({ data, datum: { y: yVal }, index, isOpaque, x, y }) => {
  const open = parseInt(index, 10) === data.length - 1;

  return (
    <LabelTooltip
      opacity={isOpaque ? 0.3 : 1}
      open={open}
      placement="right"
      title={yVal}
      TransitionProps={{ timeout: 0 }}
    >
      <svg height={1} width={1} x={x + 1} y={y} />
    </LabelTooltip>
  );
};

export default LineLabel;
