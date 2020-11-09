import React from 'react';
import styled from 'styled-components';
import { InputLabel, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const AppContainer = styled.div`
  height: 100vh;
  min-height: 700px;
  min-width: 1200px;
  position: relative;
  width: 100vw;
`;

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const SelectMenuContainer = styled.div`
  height: 40px;
  left: 20px;
  position: absolute;
  top: 20px;
`;

export const StyledInputLabel = styled(InputLabel)`
  display: inline-block !important;
  font-size: 14px !important;
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
        paper: makeStyles({ select: { '& li': { fontSize: '14px' } } })()
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
    font-size: 14px !important;
  }
  & .MuiSelect-select:focus {
    background-color: transparent !important;
  }
`;
