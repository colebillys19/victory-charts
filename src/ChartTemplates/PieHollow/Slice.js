import React from 'react';
import { Slice as VictorySlice } from 'victory-pie';

const Slice = (props) => {
  const {
    datum: { x },
    focusedSlice,
    style,
  } = props;

  return (
    <VictorySlice
      {...props}
      style={{
        ...style,
        opacity: focusedSlice && focusedSlice !== x ? 0.3 : 1,
      }}
    />
  );
};

export default Slice;
