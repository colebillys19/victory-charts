import React, { useState } from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryChart } from 'victory-chart';
import { VictoryLine } from 'victory-line';
import { VictoryScatter } from 'victory-scatter';

import BruhPoint from './BruhPoint';
import Tooltip from './Tooltip';
import { data } from './constants';
import { handlePointClick, handleMouseOut, handleMouseOver } from './helpers';
import { ChartWrapper } from '../styledComponents';

const HoverWithClick = ({ data: { data, maxVal, minVal } }) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleChartClick = () => {
    setClickedIndex(-1);
  };

  const handleScatterClick = (e) => {
    e.stopPropagation();

    return handlePointClick(clickedIndex, setClickedIndex);
  };

  return (
    <ChartWrapper onClick={handleChartClick}>
      <VictoryChart
        domain={{ y: [minVal, maxVal] }}
        domainPadding={30}
        events={[
          {
            childName: 'grid',
            eventHandlers: {
              onClick: () => handleChartClick(setClickedIndex),
            },
          },
        ]}
        padding={{ bottom: 35, left: 36.5, right: 11.5, top: 11.5 }}
      >
        <VictoryLine data={data} />
        <VictoryScatter
          data={data}
          size={3}
          style={{
            data: {
              visibility: ({ index }) =>
                hoveredIndex === index ? 'visible' : 'hidden',
            },
          }}
        />
        <VictoryScatter
          data={data}
          dataComponent={<BruhPoint clickedIndex={clickedIndex} />}
        />
        <VictoryScatter
          data={data}
          events={[
            {
              eventHandlers: {
                onClick: handleScatterClick,
                onMouseOut: handleMouseOut,
                onMouseOver: handleMouseOver,
              },
              target: 'data',
            },
          ]}
          labelComponent={<Tooltip setHoveredIndex={setHoveredIndex} />}
          labels={() => 'foo'}
          size={15}
          style={{ data: { opacity: 0.1 } }}
        />
        <VictoryAxis style={{ ticks: { size: 4, stroke: '#000' } }} />
        <VictoryAxis
          crossAxis={false}
          dependentAxis
          style={{ ticks: { size: 4, stroke: '#000' } }}
        />
      </VictoryChart>
    </ChartWrapper>
  );
};

HoverWithClick.defaultProps = { data };

export default HoverWithClick;
