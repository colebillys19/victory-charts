import React from 'react';
import styled from 'styled-components';
import { InputLabel, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const AppContainer = styled.div`
  min-width: 1200px;
  padding-top: 40px;
`;

export const AppSubcontainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ChartContainer = styled.div`
  background-color: white;
  box-shadow: 4px 4px 0 rgba(255, 255, 255, 0.5);
  margin-top: 40px;
  padding: ${({ paddingVal }) => paddingVal};
`;

export const SelectMenuContainer = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
`;

export const StyledInputLabel = styled(InputLabel)`
  color: #fff !important;
  display: inline-block !important;
  font-size: 16px !important;
  font-weight: bold !important;
  margin-right: 10px !important;
  position: relative;
  top: 13px;
  vertical-align: top;
  &:not(:first-of-type) {
    margin-left: 20px !important;
  }
`;

export const StyledSelect = styled((props) => (
  <Select
    {...props}
    MenuProps={{
      classes: {
        paper: makeStyles({ select: { '& li': { fontSize: '16px' } } })()
          .select,
      },
    }}
  />
))`
  background-color: white !important;
  min-width: 225px !important;
  height: 100% !important;
  & fieldset {
    border-color: grey !important;
  }
  & .MuiInputBase-input {
    font-size: 16px !important;
  }
  & .MuiSelect-select:focus {
    background-color: transparent !important;
  }
`;
