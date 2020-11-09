/**
 * BarHorizontal
 * @description template for chart @ "Loss Mitigation Activity"
 */

import React, { useState } from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';
import { VictoryLabel } from 'victory-core';

import BarLabel from './BarLabel';
import { data } from './constants';
import { handleClick, handleMouseOut, handleMouseOver } from './helpers';
import { ChartWrapper } from './styledComponents';

const BarHorizontal = ({ data: { barData, metrics } }) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);

  return (
    <ChartWrapper>
      <VictoryChart
        domainPadding={{ x: 25 }}
        height={90}
        padding={{ bottom: -16, left: 65, right: 19.5, top: -2 }}
      >
        <VictoryBar
          barWidth={8}
          data={barData}
          events={[
            {
              eventHandlers: {
                onClick: () => handleClick(focusedIndex, setFocusedIndex),
                onMouseOut: handleMouseOut,
                onMouseOver: handleMouseOver,
              },
              target: 'data',
            },
          ]}
          horizontal
          labelComponent={<BarLabel focusedIndex={focusedIndex} />}
          labels={() => 'foo'}
          style={{
            data: {
              fill: '#4878a6',
              opacity: ({ index }) =>
                focusedIndex !== -1 && index !== focusedIndex ? 0.3 : 1,
            },
          }}
        />
        <VictoryAxis
          invertAxis
          style={{ axis: { pointerEvents: 'none', stroke: 'transparent' } }}
          tickLabelComponent={
            <VictoryLabel
              dx={6}
              style={{
                fill: ({ index }) =>
                  focusedIndex !== -1 && index !== focusedIndex
                    ? 'rgba(0, 0, 0, 0.3)'
                    : 'rgba(0, 0, 0, 1)',
                fontSize: '6px',
              }}
            />
          }
          tickValues={metrics}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { pointerEvents: 'none', stroke: 'transparent' },
            tickLabels: { fill: 'transparent', pointerEvents: 'none' },
          }}
        />
      </VictoryChart>
    </ChartWrapper>
  );
};

BarHorizontal.defaultProps = { data };

export default BarHorizontal;
