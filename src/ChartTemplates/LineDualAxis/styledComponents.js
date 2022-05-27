import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const ChartContent = styled.div`
  padding: 14px;
  position: relative;
  top: 16px;
`;

export const ChartWrapper = styled.div`
  background-color: white;
  height: 300px;
  margin-top: 40px;
  padding: 10px;
  width: 610px;
`;

export const LabelTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: 'transparent',
    color: ({ opacity }) => `rgba(0, 0, 0, ${opacity})`,
    fontSize: '14px',
    padding: '0',
  },
}))(Tooltip);
