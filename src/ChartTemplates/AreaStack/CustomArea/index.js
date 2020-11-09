import React from 'react';
import { Area } from 'victory-area';

import GradientArea from './GradientArea';

/**
 * when a month segment within one of the five metric areas is clicked...
 * need to keep it focused (visually) somehow...
 */
const CustomArea = (props) => {
  const { active, style } = props;

  // const segmentIsFocused = !!props.focusedArea && !!props.focusedXVal;
  // const isFocusedSegment =
  //   props.name === props.focusedArea && props.activeX === props.focusedXVal;

  if (active) {
    return <GradientArea {...props} />;
  }

  return <Area {...props} style={{ ...style, stroke: 'none' }} />;
};

export default CustomArea;
