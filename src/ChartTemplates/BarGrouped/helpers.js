import React from 'react';

import BarLabel from './BarLabel';

export const getBarProps = ({
  color,
  data,
  focusedIndex,
  focusedMetric,
  metric,
  setFocusedIndex,
  setFocusedMetric,
}) => ({
  barWidth: 8.5,
  data,
  events: [
    {
      eventHandlers: {
        onClick: () =>
          handleClick({
            focusedIndex,
            focusedMetric,
            metric,
            setFocusedIndex,
            setFocusedMetric,
          }),
        onMouseOut: handleMouseOut,
        onMouseOver: handleMouseOver,
      },
      target: 'data',
    },
  ],
  labelComponent: <BarLabel metric={metric} />,
  labels: () => 'foo',
  style: {
    data: {
      fill: color,
      opacity: ({ index }) =>
        (focusedIndex !== -1 && index !== focusedIndex) ||
        (focusedMetric && metric !== focusedMetric)
          ? 0.3
          : 1,
    },
  },
});

const handleClick = ({
  focusedIndex,
  focusedMetric,
  metric,
  setFocusedIndex,
  setFocusedMetric,
}) => [
  {
    mutation: ({ index }) => {
      // click a new index
      if (focusedIndex !== index) {
        setFocusedIndex(index);
        setFocusedMetric(metric);
      }
      // click same index different metric
      else if (focusedIndex === index && focusedMetric !== metric) {
        setFocusedMetric(metric);
      }
      // click same metric
      else {
        setFocusedIndex(-1);
        setFocusedMetric('');
      }
    },
  },
];

const handleMouseOut = () => [
  { mutation: () => ({ active: undefined }), target: 'labels' },
];

const handleMouseOver = () => [
  { mutation: () => ({ active: true }), target: 'labels' },
];
