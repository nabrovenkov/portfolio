import styled from "styled-components"
import mainPhoto from "../../assets/Image/photo.webp"
import { FlexWrapper } from "../../components/FlexWrapper"

export function Main () {
  return (
		<StyledMain>
      <FlexWrapper align="center" justify="space-around">
        <span>Hi There</span>
        <h2>I am Svetlana Dyablo</h2>
  			<h1>A Web Developer. </h1>
        <Photo src={mainPhoto}/>
      </FlexWrapper>

		</StyledMain>
	)
}

const StyledMain = styled.div`
  min-height: 100vh;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`