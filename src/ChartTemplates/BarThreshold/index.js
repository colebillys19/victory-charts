/**
 * BarThreshold
 * @description template for chart @ "Customer Service Call Center" > "Service Level"
 */

import React, { useState } from 'react';
import { LineSegment, VictoryLabel } from 'victory-core';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';

import PhantomBar from './PhantomBar';

import BarLabel from './BarLabel';
import { data } from './constants';
import {
  handleClick,
  handleMouseOut,
  handleMouseOver,
  getBarFill,
} from './helpers';
import { ChartWrapper } from './styledComponents';

const BarThreshold = ({ data: { barData, thresholdValue, xAxisValues } }) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [thresholdYVal, setThresholdYVal] = useState(0);

  return (
    <ChartWrapper>
      <VictoryChart
        domain={{ y: [0, 100] }}
        domainPadding={{ x: 17 }}
        height={100}
        padding={{ bottom: 14, left: 29, right: 17, top: 11 }}
      >
        <VictoryBar
          data={[{ x: 1, y: thresholdValue }]}
          dataComponent={
            <PhantomBar
              setThresholdYVal={setThresholdYVal}
              thresholdYVal={thresholdYVal}
            />
          }
        />
        <VictoryBar
          barWidth={17}
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
          labels={({ datum: { y } }) => `${y}%`}
          style={{
            data: {
              fill: ({ datum: { y } }) => getBarFill(thresholdValue, y),
              opacity: ({ index }) =>
                focusedIndex !== -1 && index !== focusedIndex ? 0.3 : 1,
            },
          }}
        />
        <VictoryLabel
          style={{ fontSize: '6px' }}
          text={`${thresholdValue}%`}
          x={436}
          y={thresholdYVal}
        />
        <VictoryAxis
          axisComponent={<LineSegment y1={thresholdYVal} y2={thresholdYVal} />}
          style={{
            axis: { stroke: 'grey' },
            tickLabels: { fill: 'transparent', pointerEvents: 'none' },
          }}
        />
        <VictoryAxis
          gridComponent={
            <LineSegment
              style={{
                pointerEvents: 'none',
                stroke: ({ index }) =>
                  index === 0 ? 'transparent' : '#dcdcdc',
                transform: 'translateX(-15.3px)',
              }}
            />
          }
          style={{ axis: { pointerEvents: 'none', stroke: 'transparent' } }}
          tickLabelComponent={
            <VictoryLabel
              dy={-7}
              style={{
                fill: ({ index }) =>
                  focusedIndex !== -1 && index !== focusedIndex
                    ? 'rgba(0, 0, 0, 0.3)'
                    : 'rgba(0, 0, 0, 1)',
                fontSize: '6px',
              }}
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
          style={{ axis: { stroke: '#dcdcdc' } }}
          tickCount={3}
          tickFormat={(t) => `${t}%`}
          tickLabelComponent={
            <VictoryLabel dx={7} style={{ fontSize: '6px' }} />
          }
        />
      </VictoryChart>
    </ChartWrapper>
  );
};

BarThreshold.defaultProps = { data };

export default BarThreshold;
