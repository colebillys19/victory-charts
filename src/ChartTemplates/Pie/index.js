/**
 * Pie
 * @description template for chart @ "Daily Mortgage Servicing Dashboard" > "Daily Totals"
 */

import React, { useState } from 'react';
import { VictoryPie } from 'victory-pie';

import Slice from './Slice';
import SliceLabel from './SliceLabel';
import { colorScale, data } from './constants';
import { handleClick, handleMouseOut, handleMouseOver } from './helpers';
import { ChartWrapper } from './styledComponents';

const Pie = ({ data }) => {
  const [focusedSlice, setFocusedSlice] = useState('');

  return (
    <ChartWrapper>
      <svg viewBox="0 0 140 140">
        <VictoryPie
          colorScale={colorScale}
          data={data}
          dataComponent={<Slice focusedSlice={focusedSlice} />}
          events={[
            {
              eventHandlers: {
                onClick: () => handleClick(focusedSlice, setFocusedSlice),
                onMouseOut: handleMouseOut,
                onMouseOver: handleMouseOver,
              },
              target: 'data',
            },
          ]}
          height={140}
          labelComponent={<SliceLabel focusedSlice={focusedSlice} />}
          labelRadius={53}
          padding={30}
          standalone={false}
          width={140}
        />
      </svg>
    </ChartWrapper>
  );
};

Pie.defaultProps = { data };

export default Pie;
