import React, { useEffect, useState } from 'react';
import { MenuItem } from '@material-ui/core';

import {
  SelectMenuContainer,
  StyledInputLabel,
  StyledSelect,
} from './styledComponents';

const SelectMenu = ({ activeChart, setActiveChart }) => {
  const [basicChartSelection, setBasicChartSelection] = useState('-');
  const [eventChartSelection, setEventChartSelection] = useState('-');
  const [templateChartSelection, setTemplateChartSelection] = useState(
    'areaStackTemplate',
  );

  useEffect(() => {
    setBasicChartSelection('-');
    setEventChartSelection('-');
    setTemplateChartSelection('-');

    /* eslint-disable default-case */
    switch (activeChart.slice(-4)) {
      case 'asic':
        setBasicChartSelection(activeChart);
        break;
      case 'late':
        setTemplateChartSelection(activeChart);
        break;
      case 'mple':
        setEventChartSelection(activeChart);
        break;
    }
  }, [activeChart]);

  return (
    <SelectMenuContainer>
      <StyledInputLabel id="template-select">Templates</StyledInputLabel>
      <StyledSelect
        labelId="template-select"
        value={templateChartSelection}
        variant="outlined"
        onChange={({ target: { value } }) => setActiveChart(value)}
      >
        <MenuItem value="-">-</MenuItem>
        <MenuItem value="areaStackTemplate">AreaStack</MenuItem>
        <MenuItem value="barTemplate">Bar</MenuItem>
        <MenuItem value="barGroupedTemplate">BarGrouped</MenuItem>
        <MenuItem value="barGroupedStackTemplate">BarGroupedStack</MenuItem>
        <MenuItem value="barHorizontalTemplate">BarHorizontal</MenuItem>
        <MenuItem value="barHorizontalStackTemplate">
          BarHorizontalStack
        </MenuItem>
        <MenuItem value="barHorizontalStackNegativeTemplate">
          BarHorizontalStackNegative
        </MenuItem>
        <MenuItem value="barLineTemplate">BarLine</MenuItem>
        <MenuItem value="barNegativeTemplate">BarNegative</MenuItem>
        <MenuItem value="barStackTemplate">BarStack</MenuItem>
        <MenuItem value="barStackLineTemplate">BarStackLine</MenuItem>
        <MenuItem value="barThresholdTemplate">BarThreshold</MenuItem>
        <MenuItem value="lineDualAxisTemplate">LineDualAxis</MenuItem>
        <MenuItem value="multiLineTemplate">MultiLine</MenuItem>
        <MenuItem value="pieTemplate">Pie</MenuItem>
        <MenuItem value="pieHollowTemplate">PieHollow</MenuItem>
      </StyledSelect>
      <StyledInputLabel id="basic-select">Basic Examples</StyledInputLabel>
      <StyledSelect
        labelId="basic-select"
        value={basicChartSelection}
        variant="outlined"
        onChange={({ target: { value } }) => setActiveChart(value)}
      >
        <MenuItem value="-">-</MenuItem>
        <MenuItem value="areaStackBasic">AreaStack</MenuItem>
        <MenuItem value="barBasic">Bar</MenuItem>
        <MenuItem value="barGroupedBasic">BarGrouped</MenuItem>
        <MenuItem value="barGroupedStackBasic">BarGroupedStack</MenuItem>
        <MenuItem value="barHorizontalBasic">BarHorizontal</MenuItem>
        <MenuItem value="barHorizontalStackBasic">BarHorizontalStack</MenuItem>
        <MenuItem value="barHorizontalStackNegativeBasic">
          BarHorizontalStackNegative
        </MenuItem>
        <MenuItem value="barLineBasic">BarLine</MenuItem>
        <MenuItem value="barNegativeBasic">BarNegative</MenuItem>
        <MenuItem value="barStackBasic">BarStack</MenuItem>
        <MenuItem value="barStackLineBasic">BarStackLine</MenuItem>
        <MenuItem value="lineDualAxisBasic">LineDualAxis</MenuItem>
        <MenuItem value="multiLineBasic">MultiLine</MenuItem>
        <MenuItem value="pieBasic">Pie</MenuItem>
      </StyledSelect>
      <StyledInputLabel id="event-select">Event Examples</StyledInputLabel>
      <StyledSelect
        labelId="event-select"
        value={eventChartSelection}
        variant="outlined"
        onChange={({ target: { value } }) => setActiveChart(value)}
      >
        <MenuItem value="-">-</MenuItem>
        <MenuItem value="hoverDualAxisExample">HoverDualAxisExample</MenuItem>
        <MenuItem value="hoverWithClickExample">HoverWithClickExample</MenuItem>
        <MenuItem value="scaledVoronoiExample">ScaledVoronoiExample</MenuItem>
      </StyledSelect>
    </SelectMenuContainer>
  );
};

export default SelectMenu;
