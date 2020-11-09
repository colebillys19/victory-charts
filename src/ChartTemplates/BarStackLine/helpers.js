import React from 'react';

import SegmentLabel from './SegmentLabel';

export const getBarProps = ({
  color,
  data,
  focusedLineIndex,
  focusedStackIndex,
  focusedStackSegment,
  metric,
  setFocusedLineIndex,
  setFocusedStackIndex,
  setFocusedStackSegment,
}) => ({
  barWidth: 14,
  data,
  events: [
    {
      eventHandlers: {
        onClick: () =>
          handleStackClick({
            focusedStackIndex,
            focusedStackSegment,
            setFocusedLineIndex,
            setFocusedStackIndex,
            setFocusedStackSegment,
          }),
        onMouseOut: handleMouseOut,
        onMouseOver: handleMouseOver,
      },
      target: 'data',
    },
  ],
  labelComponent: <SegmentLabel metric={metric} />,
  labels: ({ datum: { y } }) => y,
  style: {
    data: {
      fill: color,
      opacity: ({ datum: { segmentId } }) =>
        getOpacity(focusedLineIndex, focusedStackSegment, segmentId),
    },
  },
});

const getOpacity = (focusedLineIndex, focusedSegment, segmentId) => {
  if (focusedLineIndex !== -1) {
    return 0.3;
  }

  if (!focusedSegment) {
    return 1;
  }

  return focusedSegment === segmentId ? 1 : 0.3;
};

export const handleLineClick = ({
  focusedLineIndex,
  setFocusedLineIndex,
  setFocusedStackIndex,
  setFocusedStackSegment,
}) => [
  {
    mutation: ({ index }) => {
      setFocusedStackIndex(-1);
      setFocusedStackSegment('');

      if (focusedLineIndex === -1) {
        setFocusedLineIndex(index);
      } else {
        if (index === focusedLineIndex) {
          setFocusedLineIndex(-1);
        } else {
          setFocusedLineIndex(index);
        }
      }
    },
    target: 'data',
  },
];

export const handleMouseOut = () => [
  { mutation: () => ({ active: undefined }), target: 'labels' },
];

export const handleMouseOver = () => [
  { mutation: () => ({ active: true }), target: 'labels' },
];

const handleStackClick = ({
  focusedStackIndex,
  focusedStackSegment,
  setFocusedLineIndex,
  setFocusedStackIndex,
  setFocusedStackSegment,
}) => [
  {
    mutation: ({ datum: { segmentId }, index }) => {
      setFocusedLineIndex(-1);

      if (index !== focusedStackIndex) {
        setFocusedStackIndex(index);
      }

      if (segmentId !== focusedStackSegment) {
        setFocusedStackSegment(segmentId);
      } else {
        setFocusedStackIndex(-1);
        setFocusedStackSegment('');
      }
    },
    target: 'data',
  },
];
