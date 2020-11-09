import React from 'react';
import { VictoryLabel } from 'victory-core';

import BaseTooltip from './BaseTooltip';

const BarLabel = (props) => {
  const {
    active,
    datum: { monthString, y: yVal },
    focusedIndex,
  } = props;

  return (
    <BaseTooltip
      heading="Bar Tooltip"
      labelA="Value"
      open={!!active}
      placement="top"
      subHeading={monthString}
      TransitionProps={{ timeout: 0 }}
      valueA={`${yVal}%`}
      verticalOffset="9px"
    >
      <g>
        <VictoryLabel
          {...props}
          dy={-3}
          style={{
            fill: ({ index }) =>
              focusedIndex !== -1 && index !== focusedIndex
                ? 'rgba(0, 0, 0, 0.3)'
                : 'rgba(0, 0, 0, 1)',
            fontSize: '6px',
            pointerEvents: 'none',
          }}
        />
      </g>
    </BaseTooltip>
  );
};

export default BarLabel;
