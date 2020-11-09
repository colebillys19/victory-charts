import React, { useEffect } from 'react';

import BaseTooltip from './BaseTooltip';

import { skipRender } from './helpers';
import { usePrevious } from './hooks';

const Tooltip = ({
  active,
  datum: { y: yVal },
  index,
  setHoveredIndex,
  x,
  y,
}) => {
  const prevActive = usePrevious(active);

  useEffect(() => {
    if (active) {
      setHoveredIndex(index);
    }

    if (prevActive) {
      setHoveredIndex(-1);
    }
  }, [active, index, prevActive, setHoveredIndex]);

  return (
    <BaseTooltip
      labelA="Value @ Point"
      open={!!active}
      placement="bottom-start"
      heading="Scatter Tooltip"
      TransitionProps={{ timeout: 0 }}
      valueA={yVal}
    >
      <svg height={1} width={1} x={x} y={y + 5} />
    </BaseTooltip>
  );
};

export default React.memo(Tooltip, skipRender);
