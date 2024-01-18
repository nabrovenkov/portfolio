import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a`
  padding: 10px;
  position: relative;
  z-index: 0;
  margin-bottom: 40px;

  &::before {
    content: "";
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    z-index: -1;

  }
  &:hover {
    &::before {
      height: 10px;
    }
  }

`;
