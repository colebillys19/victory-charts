export const handleMouseOut = () => [
  {
    mutation: ({ style }) => ({ style: { ...style, fill: 'green' } }),
    target: 'data',
  },
];

export const handleMouseOver = () => [
  {
    mutation: ({ style }) => ({ style: { ...style, fill: 'pink' } }),
    target: 'data',
  },
];
