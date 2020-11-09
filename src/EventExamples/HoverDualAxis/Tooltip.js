import React, { useEffect } from 'react';

import BaseTooltip from './BaseTooltip';

import { skipRender } from './helpers';
import { usePrevious } from './hooks';

const Tooltip = ({
  active,
  datum: { y: yVal },
  index,
  lineId,
  setHoveredIndex,
  setHoveredLine,
  x,
  y,
}) => {
  const prevActive = usePrevious(active);

  useEffect(() => {
    if (active) {
      setHoveredIndex(index);
      setHoveredLine(lineId);
    }

    if (prevActive) {
      setHoveredIndex(-1);
      setHoveredLine('');
    }
  }, [active, index, lineId, prevActive, setHoveredIndex, setHoveredLine]);

  return (
    <BaseTooltip
      labelA="Line Color"
      labelB="Value @ Point"
      open={!!active}
      placement="bottom"
      heading="Scatter Tooltip"
      TransitionProps={{ timeout: 0 }}
      valueA={lineId === 'a' ? 'Blue' : 'Orange'}
      valueB={lineId === 'a' ? yVal : `${yVal}%`}
    >
      <svg height={1} width={1} x={x} y={y} />
    </BaseTooltip>
  );
};

export default React.memo(Tooltip, skipRender);
