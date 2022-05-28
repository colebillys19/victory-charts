import React from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';
import { VictoryStack } from 'victory-stack';

import { data } from './constants';
import { ChartWrapper } from '../styledComponents';

const BarHorizontalStackNegative = () => (
  <ChartWrapper>
    <VictoryChart
      domainPadding={{ x: 25 }}
      padding={{ bottom: 44, left: 36, right: 36, top: 28 }}
    >
      <VictoryStack horizontal>
        <VictoryBar data={data.barA} />
        <VictoryBar data={data.barB} />
        <VictoryBar data={data.barC} />
      </VictoryStack>
      <VictoryAxis tickFormat={() => ''} />
      <VictoryAxis
        crossAxis={false}
        dependentAxis
        style={{ ticks: { size: 4, stroke: '#000' } }}
      />
    </VictoryChart>
  </ChartWrapper>
);

export default BarHorizontalStackNegative;
