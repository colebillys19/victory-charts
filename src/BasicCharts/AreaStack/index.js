import React from 'react';
import { VictoryArea } from 'victory-area';
import { VictoryAxis } from 'victory-axis';
import { VictoryChart } from 'victory-chart';
import { VictoryStack } from 'victory-stack';

import { dataA, dataB, dataC } from './constants';
import { ChartWrapper } from '../styledComponents';

const AreaStack = () => (
  <ChartWrapper>
    <VictoryChart>
      <VictoryStack>
        <VictoryArea data={dataA} style={{ data: { fill: '#333' } }} />
        <VictoryArea data={dataB} style={{ data: { fill: '#888' } }} />
        <VictoryArea data={dataC} style={{ data: { fill: '#DDD' } }} />
      </VictoryStack>
      <VictoryAxis style={{ ticks: { size: 4, stroke: '#000' } }} />
      <VictoryAxis
        dependentAxis
        style={{ ticks: { size: 4, stroke: '#000' } }}
      />
    </VictoryChart>
  </ChartWrapper>
);

export default AreaStack;
