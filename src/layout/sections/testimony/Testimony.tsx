import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { IconWrapper } from "../skills/Skill";
import { Container } from "../../../components/Container";

export function Testimony () {
  return (
    <StyledTestimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction="column" align="center">
          <IconWrapper>
            <Icon iconId={"testimony"} />
          </IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  )
}

const StyledTestimony = styled.section`
  ${IconWrapper} {
    margin-top: 30px;
  }
`

