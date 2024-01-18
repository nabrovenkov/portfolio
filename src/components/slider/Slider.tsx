import styled from "styled-components"
import { FlexWrapper } from "../FlexWrapper"
import { theme } from "../../styles/Theme"

export function Slider () {
  return (
		<StyledSlider>
      <FlexWrapper>
        <Slide>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <Name>@ivan ivanow</Name>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>
		</StyledSlider>
	)
}

const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 320px 84px;
`
const Slide = styled.div`
  text-align: center;
`
const Text = styled.p`
  
`
const Name = styled.span`
  display: inline-block;
	text-align: center;
	font-family: 'Josefin Sans';
	font-size: 16px;
	font-weight: 600;
	letter-spacing: 1px;
	text-transform: uppercase;
  margin: 22px 0 42px;
`
const Pagination = styled.div`
	span {
		display: inline-block;
		height: 7px;
		width: 7px;
		border-radius: 20px;
		background-color: rgba(255, 255, 255, 0.5);
    
    & + span {
      margin-left: 5px;
    }

    &:nth-child(2) {
      width: 20px;
      background-color: ${theme.colors.accent};
    }

	}
`