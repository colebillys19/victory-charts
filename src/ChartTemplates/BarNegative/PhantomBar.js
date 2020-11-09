import React, { useEffect } from 'react';
import { Bar } from 'victory-bar';

const PhantomBar = (props) => {
  const { setXAxisPosition, xAxisPosition, y0 } = props;

  useEffect(() => {
    if (xAxisPosition !== y0) {
      setXAxisPosition(y0);
    }
  }, [setXAxisPosition, xAxisPosition, y0]);

  return (
    <Bar {...props} style={{ fill: 'transparent', pointerEvents: 'none' }} />
  );
};

export default PhantomBar;
