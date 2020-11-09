/**
 * BarGrouped
 * @description template for chart @ "Monthly Executive Summary" > "Monthly Dashboard"
 */

import React, { useState } from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';
import { VictoryGroup } from 'victory-group';
import { VictoryLabel } from 'victory-core';

import { data } from './constants';
import { getBarProps } from './helpers';
import { ChartWrapper } from './styledComponents';

const BarGrouped = ({
  data: { ageData, maturityData, originalTermData, xAxisValues },
}) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [focusedMetric, setFocusedMetric] = useState('');

  return (
    <ChartWrapper>
      <VictoryChart
        domainPadding={{ x: 16, y: 10 }}
        height={110}
        padding={{ bottom: 3.5, left: 4, right: 4, top: 12.25 }}
      >
        <VictoryGroup offset={10.5}>
          <VictoryBar
            {...getBarProps({
              color: '#f5a95d',
              data: originalTermData,
              focusedIndex,
              focusedMetric,
              metric: 'Original Term',
              setFocusedIndex,
              setFocusedMetric,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#e87f81',
              data: maturityData,
              focusedIndex,
              focusedMetric,
              metric: 'Maturity',
              setFocusedIndex,
              setFocusedMetric,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#97c8c4',
              data: ageData,
              focusedIndex,
              focusedMetric,
              metric: 'Age',
              setFocusedIndex,
              setFocusedMetric,
            })}
          />
        </VictoryGroup>
        <VictoryAxis
          orientation="top"
          style={{ axis: { stroke: '#dcdcdc' } }}
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

BarGrouped.defaultProps = { data };

export default BarGrouped;
