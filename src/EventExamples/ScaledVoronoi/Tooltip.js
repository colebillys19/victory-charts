import React from 'react';
import { VictoryTooltip } from 'victory-tooltip';

import BaseTooltip from './BaseTooltip';

const Tooltip = ({
  active,
  center,
  datum: { dataSet, displayValue },
  renderInPortal,
  x,
  y,
}) => (
  <BaseTooltip
    heading="Voronoi Tooltip"
    labelA="Line Color"
    labelB="Value @ Point"
    open
    placement="bottom"
    TransitionProps={{ timeout: 0 }}
    valueA={dataSet === 'a' ? 'Blue' : 'Orange'}
    valueB={displayValue}
  >
    <VictoryTooltip
      active={active}
      center={center}
      flyoutStyle={{ visibility: 'hidden' }}
      renderInPortal={renderInPortal}
      x={x}
      y={y}
    />
    {/* <svg height={1} width={1} x={x} y={y} /> */}
  </BaseTooltip>
);

export default Tooltip;
