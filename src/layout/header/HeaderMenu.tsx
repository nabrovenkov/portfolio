import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export function HeaderMenu(props: { menuItems: Array<string> }) {
	return (
		<StyledHeaderMenu>
			<ul>
				{props.menuItems.map(item => {
					return (
						<ListItems>
							<Link href=''>
								{item}
								<Mask>
									<span>{item}</span>
								</Mask>
								<Mask>
									<span>{item}</span>
								</Mask>
							</Link>
						</ListItems>
					)
				})}
			</ul>
		</StyledHeaderMenu>
	)
}

const StyledHeaderMenu = styled.nav`
	ul {
		display: flex;
		gap: 30px;
	}
`
const Link = styled.a`
	font-family: Josefin Sans, sans-serif;
	font-size: 30px;
	font-weight: 400;
  text-align: center;
  color: transparent;
  `
const Mask = styled.span`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  overflow-y: hidden;
  /* outline: 1px solid red; */
  color: ${theme.colors.accent};
  
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%)
    }
  }
  `
  const ListItems = styled.li`
    position: relative;
    
    &::before {
      content: "";
      display: inline-block;
      background-color: ${theme.colors.accent};
      height: 3px;
      position: absolute;
      top: 50%;
      right: -10px;
      left: -10px;
      z-index: 1;

      transform: scale(0);
    }
    
    &:hover {
      &::before {
        transform: scale(1)
      }
      ${Mask} {
        transform: skewX(12deg) translateX(5px);
        color: ${theme.colors.font};
        & + ${Mask} {
          transform: skewX(12deg) translateX(-5px);
        }
      }
    }
  `