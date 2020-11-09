export const handlePointClick = (clickedIndex, setClickedIndex) => [
  {
    mutation: ({ index }) => {
      if (clickedIndex !== index) {
        setClickedIndex(index);
      } else {
        setClickedIndex(-1);
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

export const skipRender = (prevProps, nextProps) =>
  prevProps.active === nextProps.active;
