import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
	text-align: center;
	font-family: Josefin Sans, sans-serif;
	font-size: 36px;
	font-weight: 600;
	letter-spacing: 5px;

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 1px;
    width: 55px;
    background-color: ${theme.colors.accent};
    margin-bottom: 90px;

    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
  }
`