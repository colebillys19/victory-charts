/**
 * PieHollow
 * @description template for chart @ "Delinquency Roll Rate" > "30 DAYS DELQ"
 */

import React, { useState } from 'react';
import { VictoryLabel } from 'victory-core';
import { VictoryPie } from 'victory-pie';

import Slice from './Slice';
import SliceLabel from './SliceLabel';
import { colorScale, data } from './constants';
import { handleClick, handleMouseOut, handleMouseOver } from './helpers';
import { ChartWrapper } from './styledComponents';

const PieHollow = ({ data: { pieData, totalCount } }) => {
  const [focusedSlice, setFocusedSlice] = useState('');

  return (
    <ChartWrapper>
      <svg viewBox="0 0 140 140">
        <VictoryLabel
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            opacity: focusedSlice ? 0.3 : 1,
          }}
          text="Total"
          textAnchor="middle"
          x={70}
          y={50}
        />
        <VictoryLabel
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            opacity: focusedSlice ? 0.3 : 1,
          }}
          text="Loans"
          textAnchor="middle"
          x={70}
          y={70}
        />
        <VictoryLabel
          style={{ fontSize: '16px', opacity: focusedSlice ? 0.3 : 1 }}
          text={totalCount}
          textAnchor="middle"
          x={70}
          y={90}
        />
        <VictoryPie
          colorScale={colorScale}
          data={pieData}
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
          innerRadius={52}
          labelComponent={<SliceLabel />}
          padding={5}
          standalone={false}
          width={140}
        />
      </svg>
    </ChartWrapper>
  );
};

PieHollow.defaultProps = { data };

export default PieHollow;
