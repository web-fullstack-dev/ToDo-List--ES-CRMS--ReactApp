import React from "react";
import { toAuthor, toTasks } from "../routes";
import { List, Item, StyledNavLink } from "./styled";

export default () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to={toTasks()}>Tareas</StyledNavLink>
        </Item>
      </List>
      <List>
        <Item>
          <StyledNavLink to={toAuthor()}>Sobre el autor</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};