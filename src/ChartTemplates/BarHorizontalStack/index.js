/**
 * BarHorizontalStack
 * @description template for chart @ "Reason for Default"
 */

import React, { useState } from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';
import { VictoryLabel } from 'victory-core';
import { VictoryStack } from 'victory-stack';

import { data } from './constants';
import { getBarProps } from './helpers';
import { ChartWrapper } from './styledComponents';

const BarHorizontalStack = ({
  data: {
    foreclosure,
    ninetyPlus,
    sixtyToEightyNine,
    thirtyToFiftyNine,
    yAxisValues,
    yValSums,
    zeroToTwentyNine,
  },
}) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [focusedSegment, setFocusedSegment] = useState('');

  return (
    <ChartWrapper>
      <VictoryChart
        domainPadding={{ x: 25 }}
        height={216}
        padding={{ bottom: -17.5, left: 93, right: 13.5, top: 5.5 }}
      >
        <VictoryLabel
          text="Reasons"
          style={{ fill: '#59a150', fontSize: '6px' }}
          x={4}
          y={5.5}
        />
        <VictoryStack horizontal>
          <VictoryBar
            {...getBarProps({
              color: '#b10318',
              data: foreclosure,
              focusedIndex,
              focusedSegment,
              metric: 'Foreclosure',
              setFocusedIndex,
              setFocusedSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#f2a443',
              data: ninetyPlus,
              focusedIndex,
              focusedSegment,
              metric: '90+ Days',
              setFocusedIndex,
              setFocusedSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#ffdd71',
              data: sixtyToEightyNine,
              focusedIndex,
              focusedSegment,
              metric: '60-89 Days',
              setFocusedIndex,
              setFocusedSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#bee295',
              data: thirtyToFiftyNine,
              focusedIndex,
              focusedSegment,
              metric: '30-59 Days',
              setFocusedIndex,
              setFocusedSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#59a150',
              data: zeroToTwentyNine,
              focusedIndex,
              focusedSegment,
              metric: '0-29 Days',
              setFocusedIndex,
              setFocusedSegment,
              showLabel: true,
              yValSums,
            })}
          />
        </VictoryStack>
        <VictoryAxis
          invertAxis
          style={{ axis: { pointerEvents: 'none', stroke: 'transparent' } }}
          tickLabelComponent={
            <VictoryLabel
              style={{
                fill: ({ index }) =>
                  focusedIndex !== -1 && focusedIndex !== index
                    ? 'rgba(0, 0, 0, 0.3)'
                    : 'rgba(0, 0, 0, 1)',
                fontSize: '6px',
              }}
              textAnchor="start"
              x={4}
            />
          }
          tickValues={yAxisValues}
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

BarHorizontalStack.defaultProps = { data };

export default BarHorizontalStack;
