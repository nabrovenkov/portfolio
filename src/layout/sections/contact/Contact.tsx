import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Button } from "../../../components/Button"

export function Contact () {
  return (
    <StyledContact>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder={"name"}></Field>
        <Field placeholder={"subject"}></Field>
        <Field placeholder={"message"} as={"textarea"}></Field>
        <Button type="submit">Send message</Button>
      </StyledForm>
        
    </StyledContact>
  )
}

const StyledContact = styled.section`
	background-color: #1f1f20;
  min-height: 50vh;
`
const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Field = styled.input`
  
`