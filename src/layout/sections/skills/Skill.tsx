import styled from 'styled-components'
import icons from '../../../assets/Image/icons-sprite.svg'
import { Icon } from '../../../components/icon/Icon'
import { FlexWrapper } from '../../../components/FlexWrapper'

type SkillPropsType = {
  iconId: string
  title: string
  description: string
}

export function Skill (props: SkillPropsType) {
  return (
    <StyledSkill>
      <FlexWrapper direction="column" align="center">
        <IconWrapper>
          <Icon iconId={props.iconId}/>
        </IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.description}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  width: 380px;
  height: 338px;
  padding: 62px 20px 40px;
`

export const IconWrapper = styled.div`
  position: relative;

	&::before {
		content: '';
    position: absolute;
		background-color: rgba(255, 255, 255, 0.1);
		width: 80px;
		height: 80px;
		transform: rotate(45deg) translate(-50%, -50%);

    top: 50%;
    left: 50%;
    transform-origin: top left;
	}
`

const SkillTitle = styled.h3`
	margin: 70px 0 15px;
	text-transform: uppercase;
`

const SkillText = styled.p`
	text-align: center;
`
