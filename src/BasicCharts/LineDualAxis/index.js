import React from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryLabel } from 'victory-core';
import { VictoryLine } from 'victory-line';

import { dataA, dataB, xAxisTickValues } from './constants';
import { ChartWrapper } from '../styledComponents';

const LineDualAxis = () => (
  <ChartWrapper>
    <svg viewBox="0 0 451 300">
      <VictoryLine
        data={dataB}
        domain={{ y: [0, 20] }}
        domainPadding={{ x: 15 }}
        labelComponent={<VictoryLabel renderInPortal={false} />}
        labels={({ datum: { y } }) => y}
        standalone={false}
        style={{
          data: { stroke: 'orange' },
          labels: { fill: 'orange', fontSize: '10px' },
        }}
      />
      <VictoryLine
        data={dataA}
        domain={{ y: [0, 10] }}
        domainPadding={{ x: 15 }}
        labelComponent={<VictoryLabel renderInPortal={false} />}
        labels={({ datum: { y } }) => y}
        standalone={false}
        style={{
          data: { stroke: 'blue' },
          labels: { fill: 'blue', fontSize: '10px' },
        }}
      />
      <VictoryAxis
        domainPadding={{ x: 15 }}
        standalone={false}
        style={{ ticks: { size: 4, stroke: '#000' } }}
        tickValues={xAxisTickValues}
      />
      <VictoryAxis
        domain={[0, 20]}
        orientation="right"
        standalone={false}
        style={{
          tickLabels: { fill: 'orange' },
          ticks: { size: 4, stroke: '#000' },
        }}
      />
      <VictoryAxis
        domain={[0, 10]}
        orientation="left"
        standalone={false}
        style={{
          tickLabels: { fill: 'blue' },
          ticks: { size: 4, stroke: '#000' },
        }}
      />
    </svg>
  </ChartWrapper>
);

export default LineDualAxis;
