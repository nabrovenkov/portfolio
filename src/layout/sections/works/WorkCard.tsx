import styled from "styled-components"

type WorkCardPropsType= {
  src: string
  title: string
  text: string
}

export function WorkCard (props: WorkCardPropsType) {
  return (
    <StyledWorkCard>
      <Image src={props.src} alt=""/>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={"#"}>demo</Link>
      <Link href={"#"}>code</Link>
    </StyledWorkCard>
  )
}

const StyledWorkCard = styled.div`
	background-color: #252527;
  max-width: 540px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Title = styled.h3`
  
`

const Text = styled.p`
  
`

const Link = styled.a`
  
`