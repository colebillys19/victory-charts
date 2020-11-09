/**
 * BarStackLine
 * @description template for chart @ "Consumer Complaints and Inquiries" > "Consumer Complaint Activity"
 *              chart uses generic svg container instead of a VictoryChart component to allow for multiple dependent axes
 */

import React, { useState } from 'react';
import { LineSegment, VictoryLabel } from 'victory-core';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { VictoryLine } from 'victory-line';
import { VictoryScatter } from 'victory-scatter';
import { VictoryStack } from 'victory-stack';

import LineLabel from './LineLabel';
import { data, layoutProps } from './constants';
import {
  getBarProps,
  handleLineClick,
  handleMouseOut,
  handleMouseOver,
} from './helpers';
import { ChartWrapper } from './styledComponents';

const BarStackLine = ({
  data: {
    lineData,
    maxStackVal,
    maxLineVal,
    minLineVal,
    stackData,
    xAxisValues,
  },
}) => {
  const [focusedLineIndex, setFocusedLineIndex] = useState(-1);
  const [focusedStackIndex, setFocusedStackIndex] = useState(-1);
  const [focusedStackSegment, setFocusedStackSegment] = useState('');
  const [hoveredLineIndex, setHoveredLineIndex] = useState(-1);

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
        <VictoryStack {...layoutProps} domain={{ y: [0, maxStackVal] }}>
          <VictoryBar
            {...getBarProps({
              color: '#f28e2b',
              data: stackData.requestForInfo,
              focusedLineIndex,
              focusedStackIndex,
              focusedStackSegment,
              metric: 'Request For Information',
              setFocusedLineIndex,
              setFocusedStackIndex,
              setFocusedStackSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#4e79a7',
              data: stackData.regulatory,
              focusedLineIndex,
              focusedStackIndex,
              focusedStackSegment,
              metric: 'Regulatory',
              setFocusedLineIndex,
              setFocusedStackIndex,
              setFocusedStackSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#f0c64b',
              data: stackData.verbal,
              focusedLineIndex,
              focusedStackIndex,
              focusedStackSegment,
              metric: 'Verbal',
              setFocusedLineIndex,
              setFocusedStackIndex,
              setFocusedStackSegment,
            })}
          />
          <VictoryBar
            {...getBarProps({
              color: '#d75452',
              data: stackData.written,
              focusedLineIndex,
              focusedStackIndex,
              focusedStackSegment,
              metric: 'Written',
              setFocusedLineIndex,
              setFocusedStackIndex,
              setFocusedStackSegment,
            })}
          />
        </VictoryStack>
        <VictoryLine
          {...layoutProps}
          data={lineData}
          domain={{ y: [minLineVal, maxLineVal] }}
          style={{
            data: {
              opacity: () => (focusedStackSegment ? 0.3 : 1),
              pointerEvents: 'none',
              stroke: '#61a7ed',
              strokeWidth: 1.5,
            },
          }}
        />
        <VictoryScatter
          {...layoutProps}
          data={lineData}
          domain={{ y: [minLineVal, maxLineVal] }}
          size={({ index }) =>
            index === hoveredLineIndex ||
            (focusedLineIndex !== -1 && index === focusedLineIndex)
              ? 2
              : 1.5
          }
          style={{
            data: {
              fill: '#61a7ed',
              opacity: ({ index }) =>
                focusedStackSegment ||
                (focusedLineIndex !== -1 && index !== focusedLineIndex)
                  ? 0.3
                  : 1,
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
                  handleLineClick({
                    focusedLineIndex,
                    setFocusedLineIndex,
                    setFocusedStackIndex,
                    setFocusedStackSegment,
                  }),
                onMouseOut: handleMouseOut,
                onMouseOver: handleMouseOver,
              },
              target: 'data',
            },
          ]}
          labelComponent={
            <LineLabel
              focusedLineIndex={focusedLineIndex}
              focusedStackSegment={focusedStackSegment}
              hoveredLineIndex={hoveredLineIndex}
              setHoveredLineIndex={setHoveredLineIndex}
            />
          }
          labels={({ datum: { y } }) => `${y}%`}
          size={8}
          style={{ data: { fill: 'transparent' } }}
        />
        <VictoryAxis
          {...layoutProps}
          offsetY={-5}
          style={{
            axis: { stroke: 'white', strokeWidth: '30px' },
            tickLabels: { fill: 'transparent', pointerEvents: 'none' },
          }}
        />
        <VictoryAxis
          {...layoutProps}
          style={{ axis: { stroke: '#dcdcdc' } }}
          tickLabelComponent={
            <VictoryLabel
              dy={-7}
              style={{
                fill: ({ index }) =>
                  (focusedLineIndex !== -1 || focusedStackIndex !== -1) &&
                  focusedLineIndex !== index &&
                  focusedStackIndex !== index
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
            <VictoryLabel dy={5} style={{ fontSize: '5.5px' }} />
          }
          domain={[0, maxStackVal]}
          label="Stack Metric"
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

BarStackLine.defaultProps = { data };

export default BarStackLine;
