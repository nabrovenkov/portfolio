import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";

export function Testimony () {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction="column" align="center">
        <Icon iconId={"testimony"} />
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  )
}

const StyledTestimony = styled.section`
  min-height: 50vh;
	background-color: #252527;
`