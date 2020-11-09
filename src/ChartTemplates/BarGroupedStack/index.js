/**
 * BarGroupedStack
 * @description template for chart @ "Monthly Executive Summary" > "Monthly Dashboard"
 */

import React, { useState } from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';
import { VictoryGroup } from 'victory-group';
import { VictoryLabel } from 'victory-core';
import { VictoryStack } from 'victory-stack';

import { data } from './constants';
import { getBarProps } from './helpers';
import { ChartWrapper } from './styledComponents';

const BarGroupedStack = ({
  data: { stackData, bankruptcyData, xAxisValues },
}) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [focusedSegment, setFocusedSegment] = useState('');

  return (
    <ChartWrapper>
      <VictoryChart
        domainPadding={{ x: 16, y: 10 }}
        height={110}
        padding={{ bottom: 3.5, left: 4, right: 4, top: 12.25 }}
      >
        <VictoryGroup offset={10.5}>
          <VictoryStack>
            <VictoryBar
              {...getBarProps({
                color: '#71b472',
                data: stackData.thirty,
                focusedIndex,
                focusedSegment,
                metric: '30 Days',
                setFocusedIndex,
                setFocusedSegment,
              })}
            />
            <VictoryBar
              {...getBarProps({
                color: '#ffe48d',
                data: stackData.sixty,
                focusedIndex,
                focusedSegment,
                metric: '60 Days',
                setFocusedIndex,
                setFocusedSegment,
              })}
            />
            <VictoryBar
              {...getBarProps({
                color: '#f7b86a',
                data: stackData.ninety,
                focusedIndex,
                focusedSegment,
                metric: '90 Days',
                setFocusedIndex,
                setFocusedSegment,
              })}
            />
            <VictoryBar
              {...getBarProps({
                color: '#fd6868',
                data: stackData.oneTwentyPlus,
                focusedIndex,
                focusedSegment,
                metric: '120+ Days',
                setFocusedIndex,
                setFocusedSegment,
              })}
            />
            <VictoryBar
              {...getBarProps({
                color: '#c13646',
                data: stackData.foreclosure,
                focusedIndex,
                focusedSegment,
                metric: 'Foreclosure',
                setFocusedIndex,
                setFocusedSegment,
              })}
            />
          </VictoryStack>
          <VictoryStack>
            <VictoryBar
              {...getBarProps({
                color: '#7194B9',
                data: bankruptcyData,
                focusedIndex,
                focusedSegment,
                metric: 'Bankruptcy',
                setFocusedIndex,
                setFocusedSegment,
              })}
            />
          </VictoryStack>
        </VictoryGroup>
        <VictoryAxis
          orientation="top"
          style={{ axis: { stroke: '#dcdcdc' } }}
          tickCount={13}
          tickLabelComponent={
            <VictoryLabel
              dy={7}
              style={{
                fill: ({ index }) =>
                  focusedIndex !== -1 && focusedIndex !== index
                    ? 'rgba(0, 0, 0, 0.3)'
                    : 'rgba(0, 0, 0, 1)',
                fontSize: '6px',
              }}
            />
          }
          tickValues={xAxisValues}
        />
        <VictoryAxis
          style={{
            axis: { stroke: '#dcdcdc' },
            tickLabels: { fill: 'transparent', pointerEvents: 'none' },
          }}
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

BarGroupedStack.defaultProps = { data };

export default BarGroupedStack;
