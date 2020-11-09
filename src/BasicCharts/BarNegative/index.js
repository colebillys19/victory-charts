import React from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';

import { data } from './constants';
import { ChartWrapper } from '../styledComponents';

const BarNegative = () => (
  <ChartWrapper>
    <VictoryChart domainPadding={{ x: 25 }}>
      <VictoryBar data={data} standalone={false} />
      <VictoryAxis style={{ ticks: { size: 4, stroke: '#000' } }} />
      <VictoryAxis
        crossAxis={false}
        dependentAxis
        style={{ ticks: { size: 4, stroke: '#000' } }}
      />
    </VictoryChart>
  </ChartWrapper>
);

export default BarNegative;
