export const handleClick = (focusedIndex, setFocusedIndex) => [
  {
    mutation: ({ index }) => {
      if (focusedIndex !== index) {
        setFocusedIndex(index);
      } else {
        setFocusedIndex(-1);
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
