import React from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';
import { VictoryStack } from 'victory-stack';

import { data } from './constants';
import { ChartWrapper } from '../styledComponents';

const BarHorizontalStack = () => (
  <ChartWrapper>
    <VictoryChart
      domainPadding={{ x: 25 }}
      padding={{ bottom: 46, left: 54, right: 36, top: 30 }}
    >
      <VictoryStack horizontal>
        <VictoryBar data={data.barA} />
        <VictoryBar data={data.barB} />
        <VictoryBar data={data.barC} />
      </VictoryStack>
      <VictoryAxis style={{ ticks: { size: 4, stroke: '#000' } }} />
      <VictoryAxis
        dependentAxis
        style={{ ticks: { size: 4, stroke: '#000' } }}
      />
    </VictoryChart>
  </ChartWrapper>
);

export default BarHorizontalStack;
