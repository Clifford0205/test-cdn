import React, { useState, useEffect, useCallback } from 'react';
import { StyledPopoverContentContainer } from './PopoverContentContainer.styles';
import PopoverHeader from '../PopoverHeader/PopoverHeader';

function PopoverContentContainer() {
  return (
    <StyledPopoverContentContainer>
      <PopoverHeader></PopoverHeader>
    </StyledPopoverContentContainer>
  );
}

export default PopoverContentContainer;
