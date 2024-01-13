import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./Skill"


export function Skills () {
  return (
		<StyledSkills>
			<SectionTitle>My Skills</SectionTitle>
			<FlexWrapper wrap='wrap'>
				<Skill
					iconId={'html'}
					title={'html5'}
					description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
				/>
				<Skill
					iconId={'css'}
					title={'css3'}
					description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
				/>
				<Skill
					iconId={'react'}
					title={'React'}
					description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
				/>
				<Skill
					iconId={'typeScript'}
					title={'typescript'}
					description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
				/>
				<Skill
					iconId={'styledComponents'}
					title={'styled components'}
					description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
				/>
				<Skill
					iconId={'webDesign'}
					title={'WEB DESIgN  '}
					description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
				/>
			</FlexWrapper>
		</StyledSkills>
	)
};

const StyledSkills = styled.section`
	background-color: #252527;
  min-height: 100vh;
`