import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';
import { HeaderMenu } from './HeaderMenu';

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify='space-between' align='center'>
          <Logo/>
          <HeaderMenu menuItems={items}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`


