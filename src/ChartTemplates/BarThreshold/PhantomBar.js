import React, { useEffect } from 'react';
import { Bar } from 'victory-bar';

const PhantomBar = (props) => {
  const { setThresholdYVal, thresholdYVal, y } = props;

  useEffect(() => {
    if (thresholdYVal !== y) {
      setThresholdYVal(y);
    }
  }, [setThresholdYVal, thresholdYVal, y]);

  return (
    <Bar {...props} style={{ fill: 'transparent', pointerEvents: 'none' }} />
  );
};

export default PhantomBar;
