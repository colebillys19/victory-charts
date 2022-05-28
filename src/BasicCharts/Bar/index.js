import React from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';

import { data } from './constants';
import { ChartWrapper } from '../styledComponents';

const Bar = () => (
  <ChartWrapper>
    <VictoryChart
      domainPadding={{ x: 25 }}
      padding={{ bottom: 46, left: 46, right: 36, top: 46 }}
    >
      <VictoryBar data={data} />
      <VictoryAxis style={{ ticks: { size: 4, stroke: '#000' } }} />
      <VictoryAxis
        dependentAxis
        style={{ ticks: { size: 4, stroke: '#000' } }}
      />
    </VictoryChart>
  </ChartWrapper>
);

export default Bar;
