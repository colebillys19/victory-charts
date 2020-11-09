import React from 'react';
import { Area } from 'victory-area';

import BaseTooltip from '../BaseTooltip';

import { fractionLookup } from '../constants';
import { idGen } from '../helpers';

const GradientArea = ({ style, ...restProps }) => {
  const { fill: areaFill } = style;
  const { activeX, data, metric } = restProps;

  const startPercentage = fractionLookup[activeX - 1];
  const endPercentage = fractionLookup[activeX];

  const gradientId = idGen();
  const isBrowser =
    typeof window !== 'undefined' && window.__STATIC_GENERATOR !== true;
  const loc = isBrowser ? window.location.href : '';
  const newStyle = Object.assign({}, style, {
    fill: `url(${loc}#${gradientId})`,
    stroke: 'none',
  });

  const { monthString, y: yVal } = data[activeX - 1];

  return (
    <BaseTooltip
      heading="Area Tooltip"
      labelA="Metric"
      labelB="Value"
      open
      placement="right"
      subHeading={monthString}
      TransitionProps={{ timeout: 0 }}
      valueA={metric}
      valueB={`${yVal}%`}
    >
      <g>
        <defs>
          <linearGradient id={gradientId}>
            <stop offset="0%" stopColor={areaFill} stopOpacity={0.3} />
            <stop
              offset={`${startPercentage}%`}
              stopColor={areaFill}
              stopOpacity={0.3}
            />
            <stop offset={`${startPercentage}%`} stopColor={areaFill} />
            <stop offset={`${endPercentage}%`} stopColor={areaFill} />
            <stop
              offset={`${endPercentage}%`}
              stopColor={areaFill}
              stopOpacity={0.3}
            />
            <stop offset="100%" stopColor={areaFill} stopOpacity={0.3} />
          </linearGradient>
        </defs>
        <Area {...restProps} style={newStyle} />
      </g>
    </BaseTooltip>
  );
};

export default GradientArea;
