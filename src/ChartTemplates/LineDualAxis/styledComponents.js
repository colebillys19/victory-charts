import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const ChartWrapper = styled.div`
  width: 720px;
`;

export const LabelTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: 'transparent',
    color: ({ opacity }) => `rgba(0, 0, 0, ${opacity})`,
    fontSize: '14px',
    padding: '0',
  },
}))(Tooltip);
