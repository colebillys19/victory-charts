/**
 * BarLine
 * @description template for chart @ "Releases Completed" > "Releases Completed"
 *              chart uses generic svg container instead of a VictoryChart component to allow for multiple dependent axes
 */

import React, { useState } from 'react';
import { LineSegment, VictoryLabel } from 'victory-core';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryLine } from 'victory-line';
import { VictoryScatter } from 'victory-scatter';

import BarLabel from './BarLabel';
import LineLabel from './LineLabel';
import { data, layoutProps } from './constants';
import { handleClick, handleMouseOut, handleMouseOver } from './helpers';
import { ChartWrapper } from './styledComponents';

const BarLine = ({
  data: { barData, lineData, maxBarVal, maxLineVal, minLineVal, xAxisValues },
}) => {
  const [barFocused, setBarFocused] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [lineFocused, setLineFocused] = useState(false);

  return (
    <ChartWrapper>
      <svg viewBox="0 0 451 182">
        <VictoryAxis
          {...layoutProps}
          gridComponent={
            <LineSegment
              style={{
                pointerEvents: 'none',
                stroke: ({ index }) =>
                  index === 0 ? 'transparent' : '#dcdcdc',
                transform: 'translateX(-15.3px)',
              }}
            />
          }
          style={{
            axis: { stroke: '#dcdcdc' },
            tickLabels: { fill: 'transparent', pointerEvents: 'none' },
          }}
          tickValues={xAxisValues}
        />
        <VictoryBar
          {...layoutProps}
          barWidth={15}
          data={barData}
          events={[
            {
              eventHandlers: {
                onClick: () =>
                  handleClick('bar', {
                    barFocused,
                    focusedIndex,
                    lineFocused,
                    setBarFocused,
                    setFocusedIndex,
                    setLineFocused,
                  }),
                onMouseOut: handleMouseOut,
                onMouseOver: handleMouseOver,
              },
              target: 'data',
            },
          ]}
          labelComponent={<BarLabel />}
          labels={({ datum: { y } }) => y}
          style={{
            data: {
              fill: '#4e78a7',
              opacity: ({ index }) =>
                lineFocused || (barFocused && index !== focusedIndex) ? 0.3 : 1,
            },
          }}
        />
        <VictoryLine
          {...layoutProps}
          data={lineData}
          domain={{ y: [minLineVal, maxLineVal] }}
          style={{
            data: {
              opacity: () => (barFocused ? 0.3 : 1),
              pointerEvents: 'none',
              stroke: '#ee8d2d',
              strokeWidth: 1.5,
            },
          }}
        />
        <VictoryScatter
          {...layoutProps}
          data={lineData}
          domain={{ y: [minLineVal, maxLineVal] }}
          size={({ index }) =>
            index === hoveredIndex || (lineFocused && index === focusedIndex)
              ? 2
              : 1.5
          }
          style={{
            data: {
              fill: '#ee8d2d',
              opacity: ({ index }) =>
                barFocused || (lineFocused && index !== focusedIndex) ? 0.3 : 1,
            },
          }}
        />
        <VictoryScatter
          {...layoutProps}
          data={lineData}
          domain={{ y: [minLineVal, maxLineVal] }}
          events={[
            {
              eventHandlers: {
                onClick: () =>
                  handleClick('line', {
                    barFocused,
                    focusedIndex,
                    lineFocused,
                    setBarFocused,
                    setFocusedIndex,
                    setLineFocused,
                  }),
                onMouseOut: handleMouseOut,
                onMouseOver: handleMouseOver,
              },
              target: 'data',
            },
          ]}
          labelComponent={
            <LineLabel
              barFocused={barFocused}
              focusedIndex={focusedIndex}
              hoveredIndex={hoveredIndex}
              lineFocused={lineFocused}
              setHoveredIndex={setHoveredIndex}
            />
          }
          labels={({ datum: { y } }) => `${y}%`}
          size={8}
          style={{ data: { fill: 'transparent' } }}
        />
        <VictoryAxis
          {...layoutProps}
          style={{ axis: { stroke: '#dcdcdc' } }}
          tickLabelComponent={
            <VictoryLabel
              dy={-7}
              style={{
                fill: ({ index }) =>
                  focusedIndex !== -1 && focusedIndex !== index
                    ? 'rgba(0, 0, 0, 0.3)'
                    : 'rgba(0, 0, 0, 1)',
                fontSize: '5.5px',
              }}
            />
          }
          tickValues={xAxisValues}
        />
        <VictoryAxis
          {...layoutProps}
          axisLabelComponent={
            <VictoryLabel dy={-3} style={{ fontSize: '5.5px' }} />
          }
          domain={[minLineVal, maxLineVal]}
          label="Line Metric"
          orientation="right"
          style={{ axis: { stroke: '#dcdcdc' } }}
          tickFormat={(t) => `${t}%`}
          tickLabelComponent={
            <VictoryLabel dx={-6} style={{ fontSize: '5.5px' }} />
          }
        />
        <VictoryAxis
          {...layoutProps}
          axisLabelComponent={
            <VictoryLabel dy={8} style={{ fontSize: '5.5px' }} />
          }
          domain={[0, maxBarVal]}
          label="Bar Metric"
          orientation="left"
          style={{ axis: { stroke: '#dcdcdc' } }}
          tickLabelComponent={
            <VictoryLabel dx={6} style={{ fontSize: '5.5px' }} />
          }
        />
      </svg>
    </ChartWrapper>
  );
};

BarLine.defaultProps = { data };

export default BarLine;
