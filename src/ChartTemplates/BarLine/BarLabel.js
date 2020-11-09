import React, { Fragment } from 'react';
import { VictoryLabel } from 'victory-core';

import BaseTooltip from './BaseTooltip';

const BarLabel = (props) => {
  const {
    active,
    datum: { monthString, y: yVal },
    x,
    y,
  } = props;

  return (
    <Fragment>
      <BaseTooltip
        heading="Bar Tooltip"
        labelA="Value"
        open={!!active}
        placement="top"
        subHeading={monthString}
        TransitionProps={{ timeout: 0 }}
        valueA={yVal}
        verticalOffset="8px"
      >
        <svg height={1} width={1} x={x} y={y} />
      </BaseTooltip>
      <VictoryLabel
        {...props}
        style={{ fill: 'white', fontSize: '5.5px', pointerEvents: 'none' }}
        verticalAnchor="start"
        y={170}
      />
    </Fragment>
  );
};

export default BarLabel;
