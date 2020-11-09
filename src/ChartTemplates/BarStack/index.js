/**
 * BarStack
 * @description template for chart @ "Bankruptcy Activity" > "Average Duration and Delinquency Status"
 */

import React, { useState } from 'react';
import { LineSegment, VictoryLabel } from 'victory-core';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';
import { VictoryStack } from 'victory-stack';

import { data } from './constants';
import { getBarProps } from './helpers';
import { ChartWrapper } from './styledComponents';

const BarStack = ({ data: { stackData, xAxisValues } }) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [focusedSegment, setFocusedSegment] = useState('');

  return (
    <ChartWrapper>
      <VictoryChart
        domainPadding={{ x: 15, y: 10 }}
        height={165}
        padding={{ bottom: 12, left: 27.5, right: -2.5, top: 3.5 }}
        style={{ parent: { pointerEvents: 'none' } }}
      >
        <VictoryStack>
          <VictoryBar
            {...getBarProps({
              color: '#59a150',
              data: stackData.thirty,
              focusedIndex,
              focusedSegment,
              setFocusedIndex,
              setFocusedSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#ffdd71',
              data: stackData.sixty,
              focusedIndex,
              focusedSegment,
              setFocusedIndex,
              setFocusedSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#f5a644',
              data: stackData.ninety,
              focusedIndex,
              focusedSegment,
              setFocusedIndex,
              setFocusedSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#fc4242',
              data: stackData.oneTwenty,
              focusedIndex,
              focusedSegment,
              setFocusedIndex,
              setFocusedSegment,
            })}
          />
        </VictoryStack>
        <VictoryAxis
          offsetY={5.6}
          style={{
            axis: { stroke: 'white', strokeWidth: '30px' },
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
                transform: 'translateX(-16.2px)',
              }}
            />
          }
          style={{ axis: { pointerEvents: 'none', stroke: 'transparent' } }}
          tickLabelComponent={
            <VictoryLabel
              dy={-8}
              style={{
                fill: ({ index }) =>
                  focusedIndex !== -1 && focusedIndex !== index
                    ? 'rgba(0, 0, 0, 0.3)'
                    : 'rgba(0, 0, 0, 1)',
                fontSize: '5.5px',
              }}
            />
          }
          tickValues={xAxisValues}
        />
        <VictoryAxis
          axisLabelComponent={
            <VictoryLabel dy={6} style={{ fontSize: '5.5px' }} />
          }
          crossAxis={false}
          dependentAxis
          label="Y Axis Label"
          style={{
            axis: { stroke: '#dcdcdc' },
            parent: { outline: '1px solid pink' },
            ticks: { size: 2, stroke: '#dcdcdc' },
          }}
          tickLabelComponent={
            <VictoryLabel dx={7} style={{ fontSize: '5.5px' }} />
          }
        />
      </VictoryChart>
    </ChartWrapper>
  );
};

BarStack.defaultProps = { data };

export default BarStack;
