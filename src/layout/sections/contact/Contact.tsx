import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"

export function Contact () {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
          <Field placeholder={"name"}></Field>
          <Field placeholder={"subject"}></Field>
          <Field placeholder={"message"} as={"textarea"}/>
          <Button type="submit">Send message</Button>
        </StyledForm>
      </Container>
        
    </StyledContact>
  )
}

const StyledContact = styled.section`

`
const StyledForm = styled.form`
	margin: 0 auto;
	max-width: 540px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;

	textarea {
		resize: none;
    min-height: 155px;
	}
`
const Field = styled.input`
	border: 1px solid ${theme.colors.border};
	padding: 7px 15px;
	background-color: ${theme.colors.secondaryBg};
  width: 100%;

  font-family: 'Poppins', sans-serif;
  color: ${theme.colors.font};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
	&::placeholder {
    color: ${theme.colors.placeholder};
    text-transform: capitalize;
	}
  &:focus-visible {
    outline: 1px solid ${theme.colors.border};
  }
`