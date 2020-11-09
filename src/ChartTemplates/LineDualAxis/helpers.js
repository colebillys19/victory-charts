export const getPointColor = ({
  focusedIndex,
  focusedLine,
  hoveredIndex,
  hoveredLine,
  index,
  lineId,
}) => {
  if (focusedLine === lineId && focusedIndex === index) {
    return 'black';
  }

  return hoveredLine === lineId && hoveredIndex === index
    ? 'grey'
    : 'transparent';
};

export const handleClick = ({
  focusedIndex,
  focusedLine,
  lineId,
  setFocusedIndex,
  setFocusedLine,
}) => [
  {
    mutation: ({ index }) => {
      if (lineId === focusedLine && index === focusedIndex) {
        setFocusedIndex(-1);
        setFocusedLine('');
      } else {
        setFocusedIndex(index);
        setFocusedLine(lineId);
      }
    },
  },
];

export const handleMouseOut = (setHoveredIndex, setHoveredLine) => [
  {
    mutation: () => {
      setHoveredIndex(-1);
      setHoveredLine('');

      return { active: undefined };
    },
    target: 'labels',
  },
];

export const handleMouseOver = (lineId, setHoveredIndex, setHoveredLine) => [
  {
    mutation: ({ index }) => {
      setHoveredIndex(index);
      setHoveredLine(lineId);

      return { active: true };
    },
    target: 'labels',
  },
];
