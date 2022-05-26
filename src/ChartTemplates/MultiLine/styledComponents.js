import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const ChartContent = styled.div`
  padding: 14px;
  position: relative;
  right: 16px;
  top: 8px;
`;

export const ChartWrapper = styled.div`
  background-color: white;
  height: 300px;
  margin: 30px 30px;
  outline: 1px solid grey;
  width: 1100px;
`;

export const LabelTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: 'transparent',
    color: ({ opacity }) => `rgba(0, 0, 0, ${opacity})`,
    fontSize: '14px',
    padding: '0',
  },
}))(Tooltip);
