import styled from 'styled-components';
import { Tooltip as MuiTooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const Heading = styled.h3`
  color: green;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 6px;
`;

export const StyledTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: 'white',
    border: '1px solid grey',
    borderRadius: '0',
    boxShadow: '1px 1px grey',
    color: 'black',
    padding: '10px 12px',
    position: 'relative',
    top: ({ verticaloffset }) => verticaloffset || '0',
  },
}))(MuiTooltip);

export const SubHeading = styled.h4`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-size: 13px;
  & span {
    color: grey;
  }
  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;
