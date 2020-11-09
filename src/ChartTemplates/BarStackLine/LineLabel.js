import React, { useEffect } from 'react';
import { VictoryLabel } from 'victory-core';

import BaseTooltip from './BaseTooltip';

import { usePrevious } from './hooks';

const LineLabel = (props) => {
  const {
    active,
    focusedLineIndex,
    focusedStackSegment,
    datum: { monthString, y: yVal },
    hoveredLineIndex,
    index,
    setHoveredLineIndex,
  } = props;

  const prevActive = usePrevious(active);
  const prevHoveredIndex = usePrevious(hoveredLineIndex);

  useEffect(() => {
    if (active && prevHoveredIndex === -1) {
      setHoveredLineIndex(index);
    }

    if (prevActive && prevHoveredIndex === index) {
      setHoveredLineIndex(-1);
    }
  }, [
    active,
    hoveredLineIndex,
    index,
    prevActive,
    prevHoveredIndex,
    setHoveredLineIndex,
  ]);

  return (
    <BaseTooltip
      labelA="Value"
      open={!!active}
      placement="top"
      heading="Scatter Tooltip"
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
            fill:
              focusedStackSegment ||
              (focusedLineIndex !== -1 && index !== focusedLineIndex)
                ? 'rgba(0, 0, 0, 0.3)'
                : 'rgba(0, 0, 0, 1)',
            fontSize: '5.5px',
            pointerEvents: 'none',
          }}
        />
      </g>
    </BaseTooltip>
  );
};

export default LineLabel;
