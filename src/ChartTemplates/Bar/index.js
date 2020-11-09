/**
 * Bar
 * @description template for chart @ "Delinquency by Vintage" > "Loan Volume by Vintage"
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

const Bar = ({ data: { barData, xAxisValues } }) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);

  return (
    <ChartWrapper>
      <VictoryChart
        domainPadding={{ x: 5, y: 16 }}
        height={110}
        padding={{ bottom: 17.25, left: 24, right: 4.5, top: 3.5 }}
      >
        <VictoryBar
          barWidth={5}
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
          labelComponent={<BarLabel focusedIndex={focusedIndex} />}
          labels={({ datum: { y } }) => y}
          style={{
            data: {
              fill: '#4e7fac',
              opacity: ({ index }) =>
                focusedIndex !== -1 && index !== focusedIndex ? 0.3 : 1,
            },
          }}
        />
        <VictoryAxis
          style={{
            axis: { stroke: '#dcdcdc' },
            tickLabels: { fill: 'transparent', pointerEvents: 'none' },
          }}
          orientation="top"
        />
        <VictoryAxis
          style={{
            axis: { stroke: '#dcdcdc' },
            tickLabels: { fill: 'transparent', pointerEvents: 'none' },
          }}
          orientation="right"
        />
        <VictoryAxis
          style={{
            axis: { stroke: '#dcdcdc' },
            ticks: {
              size: 2,
              stroke: '#dcdcdc',
              transform: 'translateX(-4.8px)',
            },
          }}
          tickLabelComponent={
            <VictoryLabel
              angle={-90}
              dx={3}
              dy={-2.3}
              style={{
                fill: ({ index }) =>
                  focusedIndex !== -1 && index !== focusedIndex
                    ? 'rgba(0, 0, 0, 0.3)'
                    : 'rgba(0, 0, 0, 1)',
                fontSize: '5px',
                fontWeight: 'bold',
              }}
            />
          }
          tickValues={xAxisValues}
        />
        <VictoryAxis
          axisLabelComponent={
            <VictoryLabel dy={10} style={{ fontSize: '5px' }} />
          }
          crossAxis={false}
          dependentAxis
          label="Y Axis Label"
          style={{
            axis: { stroke: '#dcdcdc' },
            ticks: { size: 2, stroke: '#dcdcdc' },
          }}
          tickCount={3}
          tickLabelComponent={
            <VictoryLabel dx={8} style={{ fontSize: '5px' }} />
          }
        />
      </VictoryChart>
    </ChartWrapper>
  );
};

Bar.defaultProps = { data };

export default Bar;
