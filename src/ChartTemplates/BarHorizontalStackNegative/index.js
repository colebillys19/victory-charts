/**
 * BarHorizontalStackNegative
 * @description template for chart @ "Customer Service Reporting" > "Call Survey"
 */

import React, { useState } from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';
import { VictoryStack } from 'victory-stack';

import { data } from './constants';
import { getBarProps } from './helpers';
import { ChartWrapper } from './styledComponents';

const BarHorizontalStackNegative = ({
  data: {
    average,
    belowAverage,
    excellent,
    good,
    notAcceptable,
    poor,
    veryGood,
  },
}) => {
  const [focusedSegment, setFocusedSegment] = useState('');

  return (
    <ChartWrapper>
      <VictoryChart
        domainPadding={{ x: 25 }}
        height={730}
        padding={{ bottom: 12, left: 14, right: 14, top: 13 }}
      >
        <VictoryStack horizontal>
          <VictoryBar
            {...getBarProps({
              color: '#fdce97',
              data: good,
              focusedSegment,
              metric: 'Good',
              setFocusedSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#f5a560',
              data: average,
              focusedSegment,
              metric: 'Average',
              setFocusedSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#de916e',
              data: belowAverage,
              focusedSegment,
              metric: 'Below Average',
              setFocusedSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#bd7f6e',
              data: poor,
              focusedSegment,
              metric: 'Poor',
              setFocusedSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#b9c0ca',
              data: notAcceptable,
              focusedSegment,
              metric: 'Not Acceptable',
              setFocusedSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#9abfdb',
              data: veryGood,
              focusedSegment,
              metric: 'Very Good',
              setFocusedSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#799ec0',
              data: excellent,
              focusedSegment,
              metric: 'Excellent',
              setFocusedSegment,
            })}
          />
        </VictoryStack>
        <VictoryAxis invertAxis tickFormat={() => ''} />
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

BarHorizontalStackNegative.defaultProps = { data };

export default BarHorizontalStackNegative;
