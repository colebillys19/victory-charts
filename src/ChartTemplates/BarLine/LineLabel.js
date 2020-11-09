import React, { useEffect } from 'react';
import { VictoryLabel } from 'victory-core';

import BaseTooltip from './BaseTooltip';

import { usePrevious } from './hooks';

const LineLabel = (props) => {
  const {
    active,
    barFocused,
    datum: { monthString, y: yVal },
    focusedIndex,
    hoveredIndex,
    index,
    lineFocused,
    setHoveredIndex,
  } = props;

  const prevActive = usePrevious(active);
  const prevHoveredIndex = usePrevious(hoveredIndex);

  useEffect(() => {
    if (active && prevHoveredIndex === -1) {
      setHoveredIndex(index);
    }

    if (prevActive && prevHoveredIndex === index) {
      setHoveredIndex(-1);
    }
  }, [
    active,
    hoveredIndex,
    index,
    prevActive,
    prevHoveredIndex,
    setHoveredIndex,
  ]);

  return (
    <BaseTooltip
      heading="Scatter Tooltip"
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
          dy={-5}
          style={{
            fill: '#ee8d2d',
            fontSize: '5.5px',
            opacity:
              barFocused || (lineFocused && index !== focusedIndex) ? 0.3 : 1,
            pointerEvents: 'none',
          }}
        />
      </g>
    </BaseTooltip>
  );
};

export default LineLabel;
