import React from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';
import { VictoryGroup } from 'victory-group';

import { data } from './constants';
import { ChartWrapper } from '../styledComponents';

const BarGrouped = () => (
  <ChartWrapper>
    <VictoryChart domainPadding={{ x: 25 }}>
      <VictoryGroup offset={12}>
        <VictoryBar data={data.barA} />
        <VictoryBar data={data.barB} />
        <VictoryBar data={data.barC} />
      </VictoryGroup>
      <VictoryAxis style={{ ticks: { size: 4, stroke: '#000' } }} />
      <VictoryAxis
        dependentAxis
        style={{ ticks: { size: 4, stroke: '#000' } }}
      />
    </VictoryChart>
  </ChartWrapper>
);

export default BarGrouped;
