import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import NavigationBar from '../NavigationBar';

export default () => {
  return (
    <TopBar>
      <Logo />
      <NavigationBar />
    </TopBar>
  );
};

const TopBar = styled.div`
  display: flex;
  align-items: baseline;
`;
