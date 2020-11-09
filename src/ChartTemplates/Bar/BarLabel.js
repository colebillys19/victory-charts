import React from 'react';
import { VictoryLabel } from 'victory-core';

import BaseTooltip from './BaseTooltip';

const BarLabel = (props) => {
  const {
    active,
    datum: { y: yVal, year },
    focusedIndex,
    index,
  } = props;

  return (
    <BaseTooltip
      heading="Bar Tooltip"
      labelA="Value"
      open={!!active}
      placement="top"
      subHeading={year}
      TransitionProps={{ timeout: 0 }}
      valueA={yVal}
      verticalOffset="7px"
    >
      <g>
        <VictoryLabel
          {...props}
          angle={-90}
          dx={6}
          dy={2.3}
          style={{
            fill:
              focusedIndex !== -1 && index !== focusedIndex
                ? 'rgba(0, 0, 0, 0.3)'
                : 'rgba(0, 0, 0, 1)',
            fontSize: '5px',
            pointerEvents: 'none',
          }}
        />
      </g>
    </BaseTooltip>
  );
};

export default BarLabel;
