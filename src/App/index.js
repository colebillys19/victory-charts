import React, { useState } from 'react';

import SelectMenu from './SelectMenu';
import { chartDict } from './constants';
import { getPaddingVal } from './helpers';
import {
  AppContainer,
  AppSubcontainer,
  ChartContainer,
} from './styledComponents';

const App = () => {
  // string passed here determines which chart shows on page load (refer to chartDict constant)
  const [activeChart, setActiveChart] = useState('areaStackTemplate');

  return (
    <AppContainer className="App">
      <AppSubcontainer>
        <SelectMenu activeChart={activeChart} setActiveChart={setActiveChart} />
        <ChartContainer paddingVal={getPaddingVal(activeChart)}>
          {chartDict[activeChart]}
        </ChartContainer>
      </AppSubcontainer>
    </AppContainer>
  );
};

export default App;
