import React from 'react';

import SegmentLabel from './SegmentLabel';

export const getBarProps = ({
  color,
  data,
  focusedIndex,
  focusedSegment,
  metric,
  setFocusedIndex,
  setFocusedSegment,
  showLabel,
  yValSums,
}) => ({
  barWidth: 5,
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
  labelComponent: (
    <SegmentLabel
      focusedIndex={focusedIndex}
      metric={metric}
      showLabel={showLabel}
    />
  ),
  labels: ({ index }) => (yValSums ? yValSums[index] : 0),
  style: {
    data: {
      fill: color,
      opacity: ({ datum: { segmentId } }) =>
        getSegmentOpacity(focusedSegment, segmentId),
    },
  },
});

export const getLabelOpacity = (focusedIndex, showLabel) => {
  if (!showLabel) {
    return '0';
  }

  return focusedIndex !== -1 ? '0.3' : '1';
};

const getSegmentOpacity = (focusedSegment, segmentId) => {
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
