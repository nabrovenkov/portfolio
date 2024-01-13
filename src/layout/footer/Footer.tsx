import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"

export function Footer () {
  return (
		<StyledFooter>
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
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
  
`
const Name = styled.span`
  
`
const SocialList =styled.ul`
  display: flex;
  gap: 20px;
  
`
const SocialItem = styled.li`
  
`
const SocialLink = styled.a`
  
`
const Copyright = styled.small`
  
`