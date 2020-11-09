import React from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryChart } from 'victory-chart';
import { VictoryLine } from 'victory-line';

import { dataA, dataB, dataC } from './constants';
import { ChartWrapper } from '../styledComponents';

const MultiLine = () => (
  <ChartWrapper>
    <VictoryChart domainPadding={{ x: 15 }}>
      <VictoryLine
        data={dataC}
        labels={({ datum: { y } }) => y}
        style={{
          data: { stroke: 'red' },
          labels: { fill: 'red', fontSize: '10px' },
        }}
      />
      <VictoryLine
        data={dataB}
        labels={({ datum: { y } }) => y}
        style={{
          data: { stroke: 'green' },
          labels: { fill: 'green', fontSize: '10px' },
        }}
      />
      <VictoryLine
        data={dataA}
        labels={({ datum: { y } }) => y}
        style={{
          data: { stroke: 'blue' },
          labels: { fill: 'blue', fontSize: '10px' },
        }}
      />
      <VictoryAxis style={{ ticks: { size: 4, stroke: '#000' } }} />
      <VictoryAxis
        dependentAxis
        style={{ ticks: { size: 4, stroke: '#000' } }}
      />
    </VictoryChart>
  </ChartWrapper>
);

export default MultiLine;
