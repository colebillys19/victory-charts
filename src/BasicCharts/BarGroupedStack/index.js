import React from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';
import { VictoryGroup } from 'victory-group';
import { VictoryStack } from 'victory-stack';

import { data } from './constants';
import { ChartWrapper } from '../styledComponents';

const BarGroupedStack = () => (
  <ChartWrapper>
    <VictoryChart
      domainPadding={{ x: 25 }}
      padding={{ bottom: 46, left: 50, right: 32, top: 46 }}
    >
      <VictoryGroup offset={12}>
        <VictoryStack>
          <VictoryBar data={data.stackA.barA} />
          <VictoryBar data={data.stackA.barB} />
          <VictoryBar data={data.stackA.barC} />
        </VictoryStack>
        <VictoryStack>
          <VictoryBar data={data.stackB.barA} />
          <VictoryBar data={data.stackB.barB} />
          <VictoryBar data={data.stackB.barC} />
        </VictoryStack>
        <VictoryStack>
          <VictoryBar data={data.stackC.barA} />
          <VictoryBar data={data.stackC.barB} />
          <VictoryBar data={data.stackC.barC} />
        </VictoryStack>
      </VictoryGroup>
      <VictoryAxis style={{ ticks: { size: 4, stroke: '#000' } }} />
      <VictoryAxis
        dependentAxis
        style={{ ticks: { size: 4, stroke: '#000' } }}
      />
    </VictoryChart>
  </ChartWrapper>
);

export default BarGroupedStack;
