export const handleClick = (focusedSlice, setFocusedSlice) => [
  {
    mutation: (props) => {
      if (focusedSlice !== props.datum.x) {
        setFocusedSlice(props.datum.x);
      } else {
        setFocusedSlice('');
      }

      return props;
    },
    target: 'data',
  },
];

export const handleMouseOut = () => [
  { mutation: () => ({ active: undefined }), target: 'labels' },
  { mutation: () => ({ innerRadius: 52 }), target: 'data' },
];

export const handleMouseOver = () => [
  { mutation: () => ({ active: true }), target: 'labels' },
  { mutation: () => ({ innerRadius: 0 }), target: 'data' },
];
