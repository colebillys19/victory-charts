import React, { useState } from 'react';

import SelectMenu from './SelectMenu';
import { chartDict } from './constants';
import { AppContainer, FlexContainer } from './styledComponents';

const App = () => {
  const [activeChart, setActiveChart] = useState('areaStackTemplate');

  return (
    <AppContainer className="App">
      <SelectMenu activeChart={activeChart} setActiveChart={setActiveChart} />
      <FlexContainer>{chartDict[activeChart]}</FlexContainer>
    </AppContainer>
  );
};

export default App;
