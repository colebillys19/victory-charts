import React from 'react';

import SegmentLabel from './SegmentLabel';

export const getBarProps = ({
  color,
  data,
  focusedIndex,
  focusedSegment,
  setFocusedIndex,
  setFocusedSegment,
}) => ({
  barWidth: 17,
  data,
  events: [
    {
      eventHandlers: {
        onClick: () =>
          handleClick({
            focusedIndex,
            focusedSegment,
            setFocusedIndex,
            setFocusedSegment,
          }),
        onMouseOut: handleMouseOut,
        onMouseOver: handleMouseOver,
      },
      target: 'data',
    },
  ],
  labelComponent: <SegmentLabel focusedSegment={focusedSegment} />,
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

const handleClick = ({
  focusedIndex,
  focusedSegment,
  setFocusedIndex,
  setFocusedSegment,
}) => [
  {
    mutation: ({ active, datum: { segmentId }, index }) => {
      if (index !== focusedIndex) {
        setFocusedIndex(index);
      }

      if (segmentId !== focusedSegment) {
        setFocusedSegment(segmentId);
      } else {
        setFocusedIndex(-1);
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
