import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { WorkCard } from "./WorkCard";
import socialImg from "../../../assets/Image/proj-1.png"
import timerImg from "../../../assets/Image/proj-2.png"

const items = ["All", "Landing page", "React", "Spa"];

export function Works () {
  return (
		<StyledWorks>
			<SectionTitle>My Work</SectionTitle>
			<Menu menuItems={items} />
			<FlexWrapper>
				<WorkCard
					src={socialImg}
					title='Social Network'
					text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
				/>
				<WorkCard
					src={timerImg}
					title='Social Network'
					text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
				/>
			</FlexWrapper>
		</StyledWorks>
	)
}


const StyledWorks = styled.section`
	background-color: #1f1f20;
`


