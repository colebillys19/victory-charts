import React from 'react';

import SegmentLabel from './SegmentLabel';

export const getBarProps = ({
  color,
  data,
  focusedSegment,
  metric,
  setFocusedSegment,
}) => ({
  barWidth: 40,
  data,
  events: [
    {
      eventHandlers: {
        onClick: () => handleClick(focusedSegment, setFocusedSegment),
        onMouseOut: handleMouseOut,
        onMouseOver: handleMouseOver,
      },
      target: 'data',
    },
  ],
  labelComponent: <SegmentLabel metric={metric} />,
  labels: () => 'foo',
  style: {
    data: {
      fill: color,
      opacity: ({ datum: { segmentId } }) =>
        getOpacity(focusedSegment, segmentId),
    },
  },
});

const getOpacity = (focusedSegment, segmentId) => {
  if (!focusedSegment) {
    return 1;
  }

  return focusedSegment === segmentId ? 1 : 0.3;
};

const handleClick = (focusedSegment, setFocusedSegment) => [
  {
    mutation: ({ active, datum: { segmentId } }) => {
      if (segmentId !== focusedSegment) {
        setFocusedSegment(segmentId);
      } else {
        setFocusedSegment('');
      }

      return { active };
    },
    target: 'labels',
  },
];

const handleMouseOut = () => [
  { mutation: () => ({ active: undefined }), target: 'labels' },
];

const handleMouseOver = () => [
  { mutation: () => ({ active: true }), target: 'labels' },
];
