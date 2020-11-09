import React from 'react';
import { VictoryPie } from 'victory-pie';

import { data } from './constants';
import { ChartWrapper } from '../styledComponents';

const Pie = () => (
  <ChartWrapper>
    <VictoryPie data={data} width={600} />
  </ChartWrapper>
);

export default Pie;
