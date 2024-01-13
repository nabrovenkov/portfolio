import styled from 'styled-components'
import icons from '../../../assets/Image/icons-sprite.svg'
import { Icon } from '../../../components/icon/Icon'

type SkillPropsType = {
  iconId: string
  title: string
  description: string
}

export function Skill (props: SkillPropsType) {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId}/>
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.description}</SkillText>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  width: 30%;
`

const SkillTitle = styled.h3`
  
`

const SkillText = styled.p`
  
`
