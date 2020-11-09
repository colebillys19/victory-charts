import React, { useState } from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryLine } from 'victory-line';
import { VictoryScatter } from 'victory-scatter';

import Tooltip from './Tooltip';
import { data, layoutProps } from './constants';
import { handleMouseOut, handleMouseOver } from './helpers';
import { ChartWrapper } from '../styledComponents';

const HoverDualAxis = ({
  data: { dataA, dataB, maxAVal, maxBVal, minAVal, minBVal, xAxisValues },
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hoveredLine, setHoveredLine] = useState('');

  return (
    <ChartWrapper>
      <svg viewBox="0 0 462 308">
        <VictoryLine
          {...layoutProps}
          data={dataB}
          domain={{ y: [minBVal, maxBVal] }}
          style={{
            data: { stroke: 'orange' },
            labels: { fill: 'orange', fontSize: '10px' },
          }}
        />
        <VictoryLine
          {...layoutProps}
          data={dataA}
          domain={{ y: [minAVal, maxAVal] }}
          style={{
            data: { stroke: 'blue' },
            labels: { fill: 'blue', fontSize: '10px' },
          }}
        />
        <VictoryScatter
          {...layoutProps}
          data={dataB}
          domain={{ y: [minBVal, maxBVal] }}
          size={3}
          style={{
            data: {
              fill: 'orange',
              visibility: ({ index }) =>
                hoveredIndex === index && hoveredLine === 'b'
                  ? 'visible'
                  : 'hidden',
            },
          }}
        />
        <VictoryScatter
          {...layoutProps}
          data={dataA}
          domain={{ y: [minAVal, maxAVal] }}
          size={3}
          style={{
            data: {
              fill: 'blue',
              visibility: ({ index }) =>
                hoveredIndex === index && hoveredLine === 'a'
                  ? 'visible'
                  : 'hidden',
            },
          }}
        />
        <VictoryScatter
          {...layoutProps}
          data={dataB}
          domain={{ y: [minBVal, maxBVal] }}
          events={[
            {
              eventHandlers: {
                onMouseOut: handleMouseOut,
                onMouseOver: handleMouseOver,
              },
              target: 'data',
            },
          ]}
          labelComponent={
            <Tooltip
              lineId="b"
              setHoveredIndex={setHoveredIndex}
              setHoveredLine={setHoveredLine}
            />
          }
          labels={() => 'foo'}
          size={15}
          style={{ data: { fill: 'black', opacity: 0.1 } }}
        />
        <VictoryScatter
          {...layoutProps}
          data={dataA}
          domain={{ y: [minAVal, maxAVal] }}
          events={[
            {
              eventHandlers: {
                onMouseOut: handleMouseOut,
                onMouseOver: handleMouseOver,
              },
              target: 'data',
            },
          ]}
          labelComponent={
            <Tooltip
              lineId="a"
              setHoveredIndex={setHoveredIndex}
              setHoveredLine={setHoveredLine}
            />
          }
          labels={() => 'foo'}
          size={15}
          style={{ data: { fill: 'black', opacity: 0.1 } }}
        />
        <VictoryAxis
          {...layoutProps}
          style={{ ticks: { size: 4, stroke: '#000' } }}
          tickValues={xAxisValues}
        />
        <VictoryAxis
          {...layoutProps}
          domain={[minBVal, maxBVal]}
          orientation="right"
          style={{
            tickLabels: { fill: 'orange' },
            ticks: { size: 4, stroke: '#000' },
          }}
          tickFormat={(t) => `${t}%`}
        />
        <VictoryAxis
          {...layoutProps}
          domain={[minAVal, maxAVal]}
          orientation="left"
          style={{
            tickLabels: { fill: 'blue' },
            ticks: { size: 4, stroke: '#000' },
          }}
        />
      </svg>
    </ChartWrapper>
  );
};

HoverDualAxis.defaultProps = { data };

export default HoverDualAxis;
