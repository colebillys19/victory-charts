/**
 * BarNegative
 * @description template for chart @ "Bankruptcy Activity" > "Bankruptcy Accounts and Chapters"
 */

import React, { useState } from 'react';
import { LineSegment, VictoryLabel } from 'victory-core';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';

import BarLabel from './BarLabel';
import PhantomBar from './PhantomBar';
import { data } from './constants';
import { handleClick, handleMouseOut, handleMouseOver } from './helpers';
import { ChartWrapper } from './styledComponents';

const BarNegative = ({ data: { data, xAxisValues } }) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [xAxisPosition, setXAxisPosition] = useState(0);

  return (
    <ChartWrapper>
      <VictoryChart
        domainPadding={{ x: 16 }}
        height={100}
        padding={{ bottom: 19.5, left: 29, right: -2.5, top: 10 }}
      >
        <VictoryBar
          data={[{ x: 1, y: 1 }]}
          dataComponent={
            <PhantomBar
              setXAxisPosition={setXAxisPosition}
              xAxisPosition={xAxisPosition}
            />
          }
        />
        <VictoryBar
          barWidth={18}
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
          data={data}
          labelComponent={
            <BarLabel
              focusedIndex={focusedIndex}
              xAxisPosition={xAxisPosition}
            />
          }
          labels={({ datum: { y } }) => y}
          standalone={false}
          style={{
            data: {
              fill: '#315170',
              opacity: ({ index }) =>
                focusedIndex !== -1 && focusedIndex !== index ? 0.3 : 1,
            },
            labels: { fontSize: '6px' },
          }}
        />
        <VictoryAxis
          gridComponent={
            <LineSegment
              style={{
                pointerEvents: 'none',
                stroke: ({ index }) =>
                  index === 0 ? 'transparent' : '#dcdcdc',
                transform: 'translateX(-16.5px)',
              }}
            />
          }
          style={{
            axis: { pointerEvents: 'none', stroke: 'transparent' },
          }}
          tickLabelComponent={
            <VictoryLabel
              style={{
                fill: ({ index }) =>
                  focusedIndex !== -1 && focusedIndex !== index
                    ? 'rgba(0, 0, 0, 0.3)'
                    : 'rgba(0, 0, 0, 1)',
                fontSize: '6px',
              }}
              y={90.25}
            />
          }
          tickValues={xAxisValues}
        />
        <VictoryAxis
          axisLabelComponent={
            <VictoryLabel dy={5} style={{ fontSize: '6px' }} />
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
            <VictoryLabel dx={6} style={{ fontSize: '6px' }} />
          }
        />
      </VictoryChart>
    </ChartWrapper>
  );
};

BarNegative.defaultProps = { data };

export default BarNegative;
