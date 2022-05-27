import React, { useState } from 'react';

import SelectMenu from './SelectMenu';
import { chartDict } from './constants';
import { AppContainer, AppSubcontainer } from './styledComponents';

const App = () => {
  // string passed here determines which chart shows on page load (refer to chartDict constant)
  const [activeChart, setActiveChart] = useState('areaStackTemplate');

  return (
    <AppContainer className="App">
      <AppSubcontainer>
        <SelectMenu activeChart={activeChart} setActiveChart={setActiveChart} />
        {chartDict[activeChart]}
      </AppSubcontainer>
    </AppContainer>
  );
};

export default App;
