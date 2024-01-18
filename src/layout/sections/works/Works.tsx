import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./TabMenu";
import { WorkCard } from "./WorkCard";
import socialImg from "../../../assets/Image/proj-1.png"
import timerImg from "../../../assets/Image/proj-2.png"
import { Container } from "../../../components/Container";

const items = ["All", "Landing page", "React", "Spa"];

export function Works () {
  return (
		<StyledWorks>
			<Container>
				<SectionTitle>My Work</SectionTitle>
				<TabMenu menuItems={items} />
				<FlexWrapper justify="space-between">
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
			</Container>
		</StyledWorks>
	)
}


const StyledWorks = styled.section`
`


