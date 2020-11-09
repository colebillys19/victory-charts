import React, { Fragment } from 'react';

import ConditionalRender from './ConditionalRender';

import { Heading, StyledTooltip, SubHeading, Text } from './styledComponents';

const BaseTooltip = ({
  children,
  heading,
  labelA,
  labelB,
  open,
  subHeading,
  valueA,
  valueB,
  verticalOffset,
  ...restProps
}) => (
  <StyledTooltip
    open={open}
    title={
      <Fragment>
        <Heading>{heading}</Heading>
        <ConditionalRender
          Component={<SubHeading>{subHeading}</SubHeading>}
          shouldRender={!!subHeading}
        />
        <Text>
          <span>{labelA}: </span>
          <strong>{valueA}</strong>
        </Text>
        <ConditionalRender
          Component={
            <Text>
              <span>{labelB}: </span>
              <strong>{valueB}</strong>
            </Text>
          }
          shouldRender={!!labelB && !!valueB}
        />
      </Fragment>
    }
    verticaloffset={verticalOffset}
    {...restProps}
  >
    {children}
  </StyledTooltip>
);

export default BaseTooltip;
