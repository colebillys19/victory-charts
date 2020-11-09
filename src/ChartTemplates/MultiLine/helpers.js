export const onVoronoiActivated = (points, setHoveredIndex, setHoveredLine) => {
  if (points.length) {
    setHoveredLine(points[0].childName);
    setHoveredIndex(points[0].x - 1);
  }
};

export const onVoronoiDeactivated = (
  points,
  setHoveredIndex,
  setHoveredLine,
) => {
  if (points.length) {
    setHoveredLine('');
    setHoveredIndex(-1);
  }
};
