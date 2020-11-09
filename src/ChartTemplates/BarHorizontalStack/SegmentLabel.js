import React, { Fragment } from 'react';
import { VictoryLabel } from 'victory-core';

import BaseTooltip from './BaseTooltip';
import { getLabelOpacity } from './helpers';

const SegmentLabel = (props) => {
  const {
    active,
    datum: { reason, y: yVal },
    focusedIndex,
    metric,
    showLabel,
    x,
    y,
  } = props;

  return (
    <Fragment>
      <BaseTooltip
        heading="Bar Segment Tooltip"
        labelA="Metric"
        labelB="Value"
        open={!!active}
        placement="top"
        subHeading={reason}
        TransitionProps={{ timeout: 0 }}
        valueA={metric}
        valueB={yVal}
        verticalOffset="0px"
      >
        <svg height={1} width={1} x={x} y={y} />
      </BaseTooltip>
      <VictoryLabel
        {...props}
        dx={3}
        style={{
          fill: `rgba(0, 0, 0, ${getLabelOpacity(focusedIndex, showLabel)})`,
          fontSize: '6px',
          pointerEvents: 'none',
        }}
      />
    </Fragment>
  );
};

export default SegmentLabel;
