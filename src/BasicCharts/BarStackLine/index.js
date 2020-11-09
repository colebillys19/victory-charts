import React from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryLabel } from 'victory-core';
import { VictoryLine } from 'victory-line';
import { VictoryStack } from 'victory-stack';

import { dataA, dataB, xAxisTickValues } from './constants';
import { ChartWrapper } from '../styledComponents';

const BarStackLine = () => (
  <ChartWrapper>
    <svg viewBox="0 0 451 300">
      <VictoryStack
        domain={{ y: [0, 60] }}
        domainPadding={{ x: 25 }}
        standalone={false}
      >
        <VictoryBar data={dataB} standalone={false} />
        <VictoryBar data={dataB} standalone={false} />
        <VictoryBar data={dataB} standalone={false} />
      </VictoryStack>
      <VictoryLine
        data={dataA}
        domain={{ y: [0, 10] }}
        domainPadding={{ x: 25 }}
        labelComponent={<VictoryLabel renderInPortal={false} />}
        labels={({ datum: { y } }) => y}
        standalone={false}
        style={{
          data: { stroke: 'orange' },
          labels: { fill: 'orange', fontSize: '10px' },
        }}
      />
      <VictoryAxis
        domainPadding={{ x: 25 }}
        standalone={false}
        style={{ ticks: { size: 4, stroke: '#000' } }}
        tickValues={xAxisTickValues}
      />
      <VictoryAxis
        domain={[0, 10]}
        orientation="right"
        standalone={false}
        style={{
          tickLabels: { fill: 'orange' },
          ticks: { size: 4, stroke: '#000' },
        }}
      />
      <VictoryAxis
        domain={[0, 60]}
        orientation="left"
        standalone={false}
        style={{
          ticks: { size: 4, stroke: '#000' },
        }}
      />
    </svg>
  </ChartWrapper>
);

export default BarStackLine;
