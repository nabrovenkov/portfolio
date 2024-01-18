import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Link } from "../../../components/Link"
import { Button } from "../../../components/Button"

type WorkCardPropsType= {
  src: string
  title: string
  text: string
}

export function WorkCard (props: WorkCardPropsType) {
  return (
		<StyledWorkCard>
			<ImageWrapper>
				<Image src={props.src} alt='' />
				<Button>view project</Button>
			</ImageWrapper>
			<Description>
				<Title>{props.title}</Title>
				<Text>{props.text}</Text>
				<Link href={'#'}>demo</Link>
				<Link href={'#'}>code</Link>
			</Description>
		</StyledWorkCard>
	)
}

const StyledWorkCard = styled.div`
	background-color: ${theme.colors.secondaryBg};
	max-width: 540px;
	width: 100%;

	
`
const Description = styled.div`
	padding: 25px 20px;

	${Link} {
		padding: 10px 0;

		& + ${Link} {
			margin-left: 20px;
		}
	}
`
const ImageWrapper = styled.div`
/* display: flex; */
  position: relative;
  ${Button} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  
  &:hover {
    ${Button} {
      opacity: 1;
    }
    
    &::before {
      content: '';
      background-color: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);
      
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
  `
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  `

const Title = styled.h3`
	letter-spacing: 1px;
  `

const Text = styled.p`
  margin: 15px 0 20px;
  `

