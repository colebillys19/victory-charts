/**
 * MultiLine
 * @description template for chart @ "Bankruptcy Activity" > "Average Duration and Delinquency Status"
 *              chart uses VictoryVoronoiContainer for tooltip-on-hover behavior
 */

import React, { useState } from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryChart } from 'victory-chart';
import { VictoryLabel } from 'victory-core';
import { VictoryLine } from 'victory-line';
import { VictoryScatter } from 'victory-scatter';
import { VictoryVoronoiContainer } from 'victory-voronoi-container';

import LineLabel from './LineLabel';
import ScatterPoint from './ScatterPoint';
import VoronoiLabel from './VoronoiLabel';
import { data, voronoiBlacklist } from './constants';
import { onVoronoiActivated, onVoronoiDeactivated } from './helpers';
import { ChartWrapper } from './styledComponents';

const MultiLine = ({
  data: { lineAData, lineBData, lineCData, xAxisValues },
}) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [focusedLine, setFocusedLine] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hoveredLine, setHoveredLine] = useState('');

  const onChartClick = () => {
    if (hoveredIndex === focusedIndex && hoveredLine === focusedLine) {
      setFocusedIndex(-1);
      setFocusedLine('');
    } else if (hoveredIndex !== -1 && hoveredLine) {
      setFocusedIndex(hoveredIndex);
      setFocusedLine(hoveredLine);
    }
  };

  return (
    <ChartWrapper onClick={onChartClick}>
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer
            labelComponent={<VoronoiLabel />}
            labels={() => 'foo'}
            onActivated={(points) =>
              onVoronoiActivated(points, setHoveredIndex, setHoveredLine)
            }
            onDeactivated={(points) =>
              onVoronoiDeactivated(points, setHoveredIndex, setHoveredLine)
            }
            radius={10}
            voronoiBlacklist={voronoiBlacklist}
          />
        }
        domainPadding={15}
        height={110}
        padding={{ bottom: 13.75, left: 34, right: -4.5, top: 3.5 }}
      >
        <VictoryLine
          data={lineCData}
          labelComponent={
            <LineLabel
              isOpaque={focusedLine && focusedLine !== 'chart-scatter-2'}
            />
          }
          labels={() => 'foo'}
          name="line-c"
          style={{
            data: {
              opacity:
                focusedLine && focusedLine !== 'chart-scatter-2' ? 0.3 : 1,
              stroke: '#004991',
              strokeWidth: 1,
            },
          }}
        />
        <VictoryScatter
          data={lineCData}
          name="scatter-c"
          style={{
            data: {
              fill: '#004991',
              opacity:
                focusedLine && focusedLine !== 'chart-scatter-2' ? 0.3 : 1,
            },
          }}
          size={1}
        />
        <VictoryScatter
          data={lineCData}
          dataComponent={
            <ScatterPoint
              color="#004991"
              focusedIndex={focusedIndex}
              focusedLine={focusedLine}
              name="chart-scatter-2"
            />
          }
        />
        <VictoryLine
          data={lineBData}
          labelComponent={
            <LineLabel
              isOpaque={focusedLine && focusedLine !== 'chart-scatter-5'}
            />
          }
          labels={() => 'foo'}
          name="line-b"
          style={{
            data: {
              opacity:
                focusedLine && focusedLine !== 'chart-scatter-5' ? 0.3 : 1,
              stroke: '#678cb1',
              strokeWidth: 1,
            },
          }}
        />
        <VictoryScatter
          data={lineBData}
          name="scatter-b"
          style={{
            data: {
              fill: '#678cb1',
              opacity:
                focusedLine && focusedLine !== 'chart-scatter-5' ? 0.3 : 1,
            },
          }}
          size={1}
        />
        <VictoryScatter
          data={lineBData}
          dataComponent={
            <ScatterPoint
              color="#678cb1"
              focusedIndex={focusedIndex}
              focusedLine={focusedLine}
              name="chart-scatter-5"
            />
          }
        />
        <VictoryLine
          data={lineAData}
          labelComponent={
            <LineLabel
              isOpaque={focusedLine && focusedLine !== 'chart-scatter-8'}
            />
          }
          name="line-a"
          labels={() => 'foo'}
          style={{
            data: {
              opacity:
                focusedLine && focusedLine !== 'chart-scatter-8' ? 0.3 : 1,
              stroke: '#c6e4f4',
              strokeWidth: 1,
            },
          }}
        />
        <VictoryScatter
          data={lineAData}
          name="scatter-a"
          style={{
            data: {
              fill: '#c6e4f4',
              opacity:
                focusedLine && focusedLine !== 'chart-scatter-8' ? 0.3 : 1,
            },
          }}
          size={1}
        />
        <VictoryScatter
          data={lineAData}
          dataComponent={
            <ScatterPoint
              color="#c6e4f4"
              focusedIndex={focusedIndex}
              focusedLine={focusedLine}
              name="chart-scatter-8"
            />
          }
        />
        <VictoryAxis
          style={{ axis: { pointerEvents: 'none', stroke: 'transparent' } }}
          tickLabelComponent={
            <VictoryLabel
              dy={-7}
              style={{
                fill: ({ index }) =>
                  focusedIndex !== -1 && index !== focusedIndex
                    ? 'rgba(0, 0, 0, 0.3)'
                    : 'rgba(0, 0, 0, 1)',
                fontSize: '6px',
              }}
            />
          }
          tickValues={xAxisValues}
        />
        <VictoryAxis
          axisLabelComponent={
            <VictoryLabel dy={0} style={{ fontSize: '6px' }} />
          }
          dependentAxis
          label="Y Axis Metric"
          style={{
            axis: { stroke: '#dcdcdc' },
            ticks: { size: 2, stroke: '#dcdcdc' },
          }}
          tickLabelComponent={
            <VictoryLabel dx={5} style={{ fontSize: '6px' }} />
          }
        />
      </VictoryChart>
    </ChartWrapper>
  );
};

MultiLine.defaultProps = { data };

export default MultiLine;
