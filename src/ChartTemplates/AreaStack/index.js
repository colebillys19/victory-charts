/**
 * AreaStack
 * @description template for chart @ "Delinquency Summary by Reporting Month" > "CMM07-Area"
 *              chart uses VictoryVoronoiContainer in order to determine which month is being hovered
 *              on hover, the fill of an area is replaced with a gradient (making it appear as if it's multiple smaller areas)
 */

import React, { useState } from 'react';
import { VictoryArea } from 'victory-area';
import { VictoryAxis } from 'victory-axis';
import { VictoryChart } from 'victory-chart';
import { VictoryLabel } from 'victory-core';
import { VictoryStack } from 'victory-stack';
import { VictoryVoronoiContainer } from 'victory-voronoi-container';

import GridLine from './GridLine';
import { data } from './constants';
import { getAreaProps } from './helpers';
import { ChartWrapper } from './styledComponents';

const AreaStack = ({
  data: {
    foreclosureData,
    ninetyData,
    oneTwentyPlusData,
    sixtyData,
    thirtyData,
    xAxisValues,
    yValSums,
  },
}) => {
  const [activeX, setActiveX] = useState(null);
  const [focusedSegment, setFocusedSegment] = useState(null);
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const handleActivated = (points) => {
    setActiveX(points[0]._x);
    setHoveredSegment(`${points[0].childName}-${points[0]._x}`);
  };

  const handleAreaClick = () => {
    if (hoveredSegment) {
      if (hoveredSegment !== focusedSegment) {
        setFocusedSegment(hoveredSegment);
      } else {
        setFocusedSegment(null);
      }
    }
  };

  return (
    <ChartWrapper>
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer onActivated={handleActivated} />
        }
        domainPadding={{ x: 15, y: [0, 10] }}
        height={90}
        padding={{ bottom: 13.5, left: 36, right: -4.5, top: 3.25 }}
      >
        <VictoryAxis
          gridComponent={<GridLine />}
          style={{
            axis: { stroke: 'transparent' },
            grid: { stroke: '#dcdcdc' },
          }}
          tickLabelComponent={
            <VictoryLabel dy={-7} style={{ fontSize: '6px' }} />
          }
          tickValues={xAxisValues}
        />
        <VictoryStack>
          <VictoryArea
            {...getAreaProps({
              activeX,
              color: '#b10318',
              data: foreclosureData,
              focusedSegment,
              handleAreaClick,
              metric: 'Foreclosure',
              name: 'foreclosure',
            })}
          />
          <VictoryArea
            {...getAreaProps({
              activeX,
              color: '#fd4340',
              data: oneTwentyPlusData,
              focusedSegment,
              handleAreaClick,
              metric: '120+ Days',
              name: 'oneTwentyPlus',
            })}
          />
          <VictoryArea
            {...getAreaProps({
              activeX,
              color: '#f8a543',
              data: ninetyData,
              focusedSegment,
              handleAreaClick,
              metric: '90 Days',
              name: 'ninety',
            })}
          />
          <VictoryArea
            {...getAreaProps({
              activeX,
              color: '#ffdd71',
              data: sixtyData,
              focusedSegment,
              handleAreaClick,
              metric: '60 Days',
              name: 'sixty',
            })}
          />
          <VictoryArea
            {...getAreaProps({
              activeX,
              color: '#59a150',
              data: thirtyData,
              focusedSegment,
              handleAreaClick,
              metric: '30 Days',
              name: 'thirty',
            })}
            labelComponent={
              <VictoryLabel dy={-3} style={{ fontSize: '6px' }} />
            }
            labels={({ index }) => `${yValSums[index]}%`}
          />
        </VictoryStack>
        <VictoryAxis
          axisLabelComponent={
            <VictoryLabel dy={-2} style={{ fontSize: '6px' }} />
          }
          crossAxis={false}
          dependentAxis
          label="Y Axis Label"
          style={{
            axis: { stroke: '#dcdcdc' },
            ticks: { size: 2, stroke: '#dcdcdc' },
          }}
          tickCount={3}
          tickFormat={(t) => `${t}.00%`}
          tickLabelComponent={
            <VictoryLabel dx={7} style={{ fontSize: '6px' }} />
          }
        />
      </VictoryChart>
    </ChartWrapper>
  );
};

AreaStack.defaultProps = { data };

export default AreaStack;
