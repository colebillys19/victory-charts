export const getPaddingVal = (chartName) => {
  const nameChars = chartName.slice(-4);
  if (nameChars === 'asic') {
    return '0';
  }

  return nameChars === 'late' ? '30px' : '20px';
};
