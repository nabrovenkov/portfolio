import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { theme } from "../../styles/Theme"
import { Container } from "../../components/Container"
import { FlexWrapper } from "../../components/FlexWrapper"

export function Footer () {
  return (
		<StyledFooter>
			<Container>
				<FlexWrapper direction="column" align="center">
					<Name>Svetlana</Name>
					<SocialList>
						<SocialItem>
							<SocialLink>
								<Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId='instagram' />
							</SocialLink>
						</SocialItem>
						<SocialItem>
							<SocialLink>
								<Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId='telegram' />
							</SocialLink>
						</SocialItem>
						<SocialItem>
							<SocialLink>
								<Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId='vk' />
							</SocialLink>
						</SocialItem>
						<SocialItem>
							<SocialLink>
								<Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId='in' />
							</SocialLink>
						</SocialItem>
					</SocialList>
					<Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
				</FlexWrapper>
			</Container>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
`
const Name = styled.span`
  display: inline-block;
	color: ${theme.colors.font};
	font-family: Josefin Sans;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 3px;
`
const SocialList =styled.ul`
	margin: 25px 35px;
  display: flex;
  gap: 20px;
  
`
const SocialItem = styled.li`
`
const SocialLink = styled.a`
	background-color: rgba(255, 255, 255, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 35px;
	height: 35px;
	border-radius: 50%;
  color: ${theme.colors.accent};

	&:hover {
		transform: translateY(-4px);
		background-color: ${theme.colors.accent};
		color: ${theme.colors.secondaryBg};
	}
`

const Copyright = styled.small`
	opacity: 0.5;
	text-align: center;
	font-size: 12px;
	font-weight: 400;
`