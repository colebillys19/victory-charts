import React from 'react';

const ScatterPoint = ({
  active,
  color,
  focusedIndex,
  focusedLine,
  index,
  name,
  x,
  y,
}) => {
  const isFocused = index === focusedIndex && name === focusedLine;
  const isOpaque = focusedLine && name !== focusedLine;
  const isVisible = isFocused || active;

  return (
    <circle
      cx={!isNaN(x) ? x : 0}
      cy={!isNaN(y) ? y : 0}
      r={1.5}
      fill={isFocused ? 'black' : color}
      opacity={isOpaque ? 0.3 : 1}
      visibility={isVisible ? 'visible' : 'hidden'}
    />
  );
};

export default ScatterPoint;
