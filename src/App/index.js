import React, { useState } from 'react';

import SelectMenu from './SelectMenu';
import { chartDict } from './constants';
import { AppContainer, FlexContainer } from './styledComponents';

const App = () => {
  // string passed here determines which chart shows on page load (refer to chartDict constant)
  const [activeChart, setActiveChart] = useState('areaStackTemplate');

  return (
    <AppContainer className="App">
      <SelectMenu activeChart={activeChart} setActiveChart={setActiveChart} />
      <FlexContainer>{chartDict[activeChart]}</FlexContainer>
    </AppContainer>
  );
};

export default App;
