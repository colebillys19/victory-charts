/**
 * LineDualAxis
 * @description template for chart @ "Delinquency Roll Rate" > "120+ DAYS DELQ"
 *              chart uses generic svg container instead of a VictoryChart component to allow for multiple dependent axes
 */

import React, { useState } from 'react';
import { VictoryAxis } from 'victory-axis';
import { VictoryLabel } from 'victory-core';
import { VictoryLine } from 'victory-line';
import { VictoryScatter } from 'victory-scatter';

import LineLabel from './LineLabel';
import ScatterLabel from './ScatterLabel';
import { data, layoutProps } from './constants';
import {
  getPointColor,
  handleClick,
  handleMouseOut,
  handleMouseOver,
} from './helpers';
import { ChartContent, ChartWrapper } from './styledComponents';

const LineDualAxis = ({
  data: {
    maxNumberVal,
    maxPercentageVal,
    minNumberVal,
    minPercentageVal,
    numberData,
    percentageData,
    xAxisValues,
  },
}) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [focusedLine, setFocusedLine] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hoveredLine, setHoveredLine] = useState('');

  return (
    <ChartWrapper>
      <ChartContent>
        <svg viewBox="0 0 451 176">
          <VictoryLine
            {...layoutProps}
            data={percentageData}
            domain={{ y: [minPercentageVal, maxPercentageVal] }}
            labelComponent={
              <LineLabel
                isOpaque={focusedLine && focusedLine !== 'percentage'}
                isPercentage
              />
            }
            labels={() => ''}
            style={{
              data: {
                opacity: focusedLine && focusedLine !== 'percentage' ? 0.3 : 1,
                stroke: 'grey',
                strokeWidth: 2,
              },
            }}
          />
          <VictoryScatter
            {...layoutProps}
            data={percentageData}
            domain={{ y: [minPercentageVal, maxPercentageVal] }}
            size={3}
            style={{
              data: {
                fill: ({ index }) =>
                  getPointColor({
                    focusedIndex,
                    focusedLine,
                    hoveredIndex,
                    hoveredLine,
                    index,
                    lineId: 'percentage',
                  }),
                opacity: focusedLine && focusedLine !== 'percentage' ? 0.3 : 1,
              },
              labels: { fill: 'transparent', pointerEvents: 'none' },
            }}
          />
          <VictoryLine
            {...layoutProps}
            data={numberData}
            domain={{ y: [minNumberVal, maxNumberVal] }}
            labelComponent={
              <LineLabel isOpaque={focusedLine && focusedLine !== 'number'} />
            }
            labels={() => ''}
            style={{
              data: {
                opacity: focusedLine && focusedLine !== 'number' ? 0.3 : 1,
                stroke: '#1b78b5',
                strokeWidth: 5,
              },
            }}
          />
          <VictoryScatter
            {...layoutProps}
            data={numberData}
            domain={{ y: [minNumberVal, maxNumberVal] }}
            size={({ index }) =>
              (focusedLine === 'number' && focusedIndex === index) ||
              (hoveredLine === 'number' && hoveredIndex === index)
                ? 5
                : 4
            }
            style={{
              data: {
                fill: ({ index }) =>
                  focusedLine === 'number' && focusedIndex === index
                    ? 'black'
                    : '#1b78b5',
                opacity: focusedLine && focusedLine !== 'number' ? 0.3 : 1,
              },
              labels: { fill: 'transparent', pointerEvents: 'none' },
            }}
          />
          <VictoryScatter
            {...layoutProps}
            data={percentageData}
            domain={{ y: [minPercentageVal, maxPercentageVal] }}
            events={[
              {
                eventHandlers: {
                  onClick: () =>
                    handleClick({
                      focusedIndex,
                      focusedLine,
                      lineId: 'percentage',
                      setFocusedIndex,
                      setFocusedLine,
                    }),
                  onMouseOut: () =>
                    handleMouseOut(setHoveredIndex, setHoveredLine),
                  onMouseOver: () =>
                    handleMouseOver(
                      'percentage',
                      setHoveredIndex,
                      setHoveredLine,
                    ),
                },
                target: 'data',
              },
            ]}
            labelComponent={<ScatterLabel lineId="percentage" />}
            labels={() => ''}
            size={10}
            style={{
              data: { fill: 'transparent' },
              labels: { fill: 'transparent', pointerEvents: 'none' },
            }}
          />
          <VictoryScatter
            {...layoutProps}
            data={numberData}
            domain={{ y: [minNumberVal, maxNumberVal] }}
            events={[
              {
                eventHandlers: {
                  onClick: () =>
                    handleClick({
                      focusedIndex,
                      focusedLine,
                      lineId: 'number',
                      setFocusedIndex,
                      setFocusedLine,
                    }),
                  onMouseOut: () =>
                    handleMouseOut(setHoveredIndex, setHoveredLine),
                  onMouseOver: () =>
                    handleMouseOver('number', setHoveredIndex, setHoveredLine),
                },
                target: 'data',
              },
            ]}
            labelComponent={<ScatterLabel lineId="number" />}
            labels={() => ''}
            size={10}
            style={{
              data: { fill: 'transparent' },
              labels: { fill: 'transparent', pointerEvents: 'none' },
            }}
          />
          <VictoryAxis
            {...layoutProps}
            style={{
              axis: { stroke: '#dcdcdc' },
              tickLabels: {
                fill: ({ index }) =>
                  index % 2 === 0 ? '#aaaaaa' : 'transparent',
                fontSize: '12px',
                pointerEvents: 'none',
              },
              ticks: {
                size: ({ index }) => (index % 2 === 0 ? 4 : 2),
                stroke: ({ index }) =>
                  index % 2 === 0 ? '#dcdcdc' : '#e3e3e3',
              },
            }}
            tickValues={xAxisValues}
          />
          <VictoryAxis
            {...layoutProps}
            domain={[minPercentageVal, maxPercentageVal]}
            orientation="right"
            style={{
              axis: { stroke: '#dcdcdc' },
              ticks: { size: 3, stroke: '#dcdcdc' },
            }}
            tickCount={3}
            tickFormat={(t) => `${t}.00%`}
            tickLabelComponent={
              <VictoryLabel
                dx={-5}
                style={{ fill: '#aaaaaa', fontSize: '12px' }}
              />
            }
          />
          <VictoryAxis
            {...layoutProps}
            domain={[minNumberVal, maxNumberVal]}
            orientation="left"
            style={{
              axis: { stroke: '#dcdcdc' },
              ticks: { size: 3, stroke: '#dcdcdc' },
            }}
            tickCount={3}
            tickLabelComponent={
              <VictoryLabel
                dx={5}
                style={{ fill: '#aaaaaa', fontSize: '12px' }}
              />
            }
          />
        </svg>
      </ChartContent>
    </ChartWrapper>
  );
};

LineDualAxis.defaultProps = { data };

export default LineDualAxis;
