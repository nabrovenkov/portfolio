import styled from "styled-components"
import mainPhoto from "../../../assets/Image/photo.webp"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { theme } from "../../../styles/Theme"
import { Container } from "../../../components/Container"

export function Main () {
  return (
		<StyledMain>
			<Container>
				<FlexWrapper justify='space-between' align='center'>
					<div>
						<SmallText>Hi There</SmallText>
						<Name>
							I am <span>Svetlana Dyablo</span>
						</Name>
						<MainTitle>A Web Developer. </MainTitle>
					</div>
          <PhotoWrapper>
					  <Photo src={mainPhoto} />
          </PhotoWrapper>  
				</FlexWrapper>
			</Container>
		</StyledMain>
	)
}

const StyledMain = styled.section`
  min-height: 100vh;
  color: ${theme.colors.font};

  display: flex;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const SmallText = styled.span`
	font-size: 14px;
	font-weight: 400;
`

const Name = styled.h2`
	font-family: Josefin Sans;
	font-size: 50px;
	font-weight: 700;
	letter-spacing: 2.5px;
  margin: 10px 0;

  span {
    z-index: 0;
    position: relative;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 20px;
      z-index: -1;
      background-color: ${theme.colors.accent};
    }
  }
`

const MainTitle = styled.h1`
	font-size: 27px;
	font-weight: 400;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 360px;
    height: 470px;;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -20px;
    left: 20px;
    z-index: -1;
  }
`