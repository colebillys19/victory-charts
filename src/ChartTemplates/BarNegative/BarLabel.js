import React, { Fragment } from 'react';
import { VictoryLabel } from 'victory-core';

import BaseTooltip from './BaseTooltip';

const BarLabel = (props) => {
  const {
    active,
    datum: { monthString, y: yVal },
    focusedIndex,
    index,
    x,
    xAxisPosition,
    y,
  } = props;

  const isNotNegativeValue = yVal >= 0;

  return (
    <Fragment>
      <BaseTooltip
        labelA="Value"
        open={!!active}
        placement="top"
        heading="Bar Tooltip"
        subHeading={monthString}
        TransitionProps={{ timeout: 0 }}
        valueA={yVal}
        verticalOffset={isNotNegativeValue ? '-8px' : '7px'}
      >
        <svg
          height={1}
          width={1}
          x={x}
          y={isNotNegativeValue ? y : xAxisPosition}
        />
      </BaseTooltip>
      <VictoryLabel
        {...props}
        dy={isNotNegativeValue ? -1.5 : 1.5}
        style={{
          ...props.style,
          fill:
            focusedIndex !== -1 && focusedIndex !== index
              ? 'rgba(0, 0, 0, 0.3)'
              : 'rgba(0, 0, 0, 1)',
        }}
      />
    </Fragment>
  );
};

export default BarLabel;
