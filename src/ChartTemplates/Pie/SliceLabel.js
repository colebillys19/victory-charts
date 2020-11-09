import React, { Fragment } from 'react';
import { VictoryLabel } from 'victory-core';

import BaseTooltip from './BaseTooltip';

const SliceLabel = (props) => {
  const {
    active,
    datum: { x: xVal, y: yVal },
    focusedSlice,
  } = props;

  return (
    <Fragment>
      <BaseTooltip
        heading="Pie Tooltip"
        labelA="Value"
        open={!!active}
        placement="right"
        subHeading={xVal}
        TransitionProps={{ timeout: 0 }}
        valueA={yVal}
      >
        <svg height={1} width={1} x={110} y={70} />
      </BaseTooltip>
      <VictoryLabel
        {...props}
        text={xVal}
        style={{
          fill:
            focusedSlice && focusedSlice !== xVal
              ? 'rgba(0, 0, 0, 0.3)'
              : 'rgba(0, 0, 0, 1)',
          fontSize: '5.5px',
        }}
        verticalAnchor="end"
      />
      <VictoryLabel
        {...props}
        dy={1}
        text={yVal}
        style={{
          fill:
            focusedSlice && focusedSlice !== xVal
              ? 'rgba(0, 0, 0, 0.3)'
              : 'rgba(0, 0, 0, 1)',
          fontSize: '5.5px',
        }}
        verticalAnchor="start"
      />
    </Fragment>
  );
};

export default SliceLabel;
