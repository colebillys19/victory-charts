export const handleClick = (focusedSlice, setFocusedSlice) => [
  {
    mutation: ({ datum: { x } }) => {
      if (focusedSlice !== x) {
        setFocusedSlice(x);
      } else {
        setFocusedSlice('');
      }
    },
  },
];

export const handleMouseOut = () => [
  { mutation: () => ({ active: undefined }), target: 'labels' },
];

export const handleMouseOver = () => [
  { mutation: () => ({ active: true }), target: 'labels' },
];
