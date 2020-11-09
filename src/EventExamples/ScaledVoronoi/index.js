import React from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryChart } from 'victory-chart';
import { VictoryLine } from 'victory-line';
import { VictoryScatter } from 'victory-scatter';
import { VictoryVoronoiContainer } from 'victory-voronoi-container';

import ScatterPoint from './ScatterPoint';
import Tooltip from './Tooltip';
import { data } from './constants';
import { handleMouseOut, handleMouseOver } from './helpers';
import { ChartWrapper } from '../styledComponents';

const ScaledVoronoi = ({ data: { dataA, dataB, maxValA, maxValB } }) => (
  <ChartWrapper>
    <VictoryChart
      containerComponent={
        <VictoryVoronoiContainer
          labelComponent={<Tooltip />}
          labels={() => 'foo'}
          mouseFollowTooltips
          radius={20}
        />
      }
      domain={{ y: [0, 1] }}
      domainPadding={15}
      padding={{ bottom: 35, left: 53.5, right: 48.5, top: 11.5 }}
    >
      <VictoryLine
        data={dataB}
        style={{ data: { stroke: 'orange' } }}
        y={({ y }) => y / maxValB}
      />
      <VictoryScatter
        data={dataB}
        dataComponent={<ScatterPoint color="orange" />}
        events={[
          {
            eventHandlers: {
              onMouseOut: handleMouseOut,
              onMouseOver: handleMouseOver,
            },
            target: 'data',
          },
        ]}
        style={{ data: { fill: 'orange' } }}
        y={({ y }) => y / maxValB}
      />
      <VictoryLine
        data={dataA}
        style={{ data: { stroke: 'blue' } }}
        y={({ y }) => y / maxValA}
      />
      <VictoryScatter
        data={dataA}
        dataComponent={<ScatterPoint color="blue" />}
        events={[
          {
            eventHandlers: {
              onMouseOut: handleMouseOut,
              onMouseOver: handleMouseOver,
            },
            target: 'data',
          },
        ]}
        style={{ data: { fill: 'blue' } }}
        y={({ y }) => y / maxValA}
      />
      <VictoryAxis style={{ ticks: { size: 4, stroke: '#000' } }} />
      <VictoryAxis
        dependentAxis
        orientation="right"
        style={{
          tickLabels: { fill: 'orange' },
          ticks: { size: 4, stroke: '#000' },
        }}
        tickFormat={(t) => `${t * maxValB}%`}
        tickValues={[0.25, 0.5, 0.75, 1]}
      />
      <VictoryAxis
        dependentAxis
        style={{
          tickLabels: { fill: 'blue' },
          ticks: { size: 4, stroke: '#000' },
        }}
        tickFormat={(t) => t * maxValA}
        tickValues={[0.25, 0.5, 0.75, 1]}
      />
    </VictoryChart>
  </ChartWrapper>
);

ScaledVoronoi.defaultProps = { data };

export default ScaledVoronoi;
