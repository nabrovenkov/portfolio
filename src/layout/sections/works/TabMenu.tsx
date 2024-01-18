import React from "react";
import styled from "styled-components";
import { Link } from "../../../components/Link";


export function TabMenu(props: {menuItems: Array<string>}) {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item) => {
          return (
            <ListItem>
              <Link href="">{item}</Link>
            </ListItem>
          )
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  margin-bottom: 50px;

  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`

const ListItem = styled.li`
  
`

