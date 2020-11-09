const chartClickLogic = ({
  chartFocused,
  focusedIndex,
  index,
  setChartFocused,
  setOtherChartFocused,
  setFocusedIndex,
}) => {
  setOtherChartFocused(false);

  if (!chartFocused) {
    setChartFocused(true);
    setFocusedIndex(index);
  } else {
    if (index === focusedIndex) {
      setChartFocused(false);
      setFocusedIndex(-1);
    } else {
      setFocusedIndex(index);
    }
  }
};

export const handleClick = (
  chartClicked,
  {
    barFocused,
    focusedIndex,
    lineFocused,
    setBarFocused,
    setFocusedIndex,
    setLineFocused,
  },
) => [
  {
    mutation: ({ index }) => {
      if (chartClicked === 'bar') {
        chartClickLogic({
          chartFocused: barFocused,
          focusedIndex,
          index,
          setChartFocused: setBarFocused,
          setFocusedIndex,
          setOtherChartFocused: setLineFocused,
        });
      } else {
        chartClickLogic({
          chartFocused: lineFocused,
          focusedIndex,
          index,
          setChartFocused: setLineFocused,
          setFocusedIndex,
          setOtherChartFocused: setBarFocused,
        });
      }
    },
    target: 'data',
  },
];

export const handleMouseOut = () => [
  { mutation: () => ({ active: undefined }), target: 'labels' },
];

export const handleMouseOver = () => [
  { mutation: () => ({ active: true }), target: 'labels' },
];
