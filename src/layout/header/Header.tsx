import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

// Логотип и верхняя меню
export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Menu/>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #87ca87;
  display: flex;
  justify-content: space-between;
`


