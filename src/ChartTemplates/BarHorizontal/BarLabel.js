import React, { Fragment } from 'react';
import { VictoryLabel } from 'victory-core';

import BaseTooltip from './BaseTooltip';

const BarLabel = (props) => {
  const {
    active,
    datum: { metric, percentage, y: yVal },
    index,
    focusedIndex,
    x,
    y,
  } = props;

  return (
    <Fragment>
      <VictoryLabel
        {...props}
        dx={-5}
        style={{ fill: 'white', fontSize: '6px', pointerEvents: 'none' }}
        text={`${percentage}%`}
        textAnchor="end"
      />
      <BaseTooltip
        heading="Bar Tooltip"
        labelA="Value"
        labelB="Percentage"
        open={!!active}
        placement="top"
        subHeading={metric}
        TransitionProps={{ timeout: 0 }}
        valueA={yVal}
        valueB={`${percentage}%`}
        verticalOffset="-1px"
      >
        <svg height={1} width={1} x={x} y={y} />
      </BaseTooltip>
      <VictoryLabel
        {...props}
        dx={4}
        style={{
          fill:
            focusedIndex !== -1 && index !== focusedIndex
              ? 'rgba(0, 0, 0, 0.3)'
              : 'rgba(0, 0, 0, 1)',
          fontSize: '6px',
          pointerEvents: 'none',
        }}
        text={yVal}
        textAnchor="start"
      />
    </Fragment>
  );
};

export default BarLabel;
