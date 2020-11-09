import React from 'react';
import { VictoryLabel } from 'victory-core';

import BaseTooltip from './BaseTooltip';

const SegmentLabel = (props) => {
  const {
    active,
    datum: { monthString, percentage, segmentId, y: yVal },
    focusedSegment,
  } = props;

  return (
    <BaseTooltip
      heading="Bar Segment Tooltip"
      labelA="Value"
      labelB="Percentage"
      open={!!active}
      placement="top"
      subHeading={monthString}
      TransitionProps={{ timeout: 0 }}
      valueA={yVal}
      valueB={percentage}
      verticalOffset="2px"
    >
      <g>
        <VictoryLabel
          {...props}
          dy={4}
          style={{
            fill:
              focusedSegment && segmentId !== focusedSegment
                ? 'rgba(0, 0, 0, 0.3)'
                : 'rgba(0, 0, 0, 1)',
            fontSize: '5.5px',
            pointerEvents: 'none',
          }}
          text={`${percentage}%`}
          verticalAnchor="start"
        />
      </g>
    </BaseTooltip>
  );
};

export default SegmentLabel;
