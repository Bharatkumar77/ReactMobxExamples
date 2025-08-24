import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../ContextStore';
import { NavContainer, NavButton } from '../Styles/nav';
const Navigation = () => {
    const { appState } = useStore();
    const { currentPage } = appState;
  
    return (
      <NavContainer>
        <NavButton isActive={currentPage === "login"} onClick={() => appState.goToPage("login")}>
          Login
        </NavButton>
        <NavButton isActive={currentPage === "signup"} onClick={() => appState.goToPage("signup")}>
          Signup
        </NavButton>
        <NavButton isActive={currentPage === "form"} onClick={() => appState.goToPage("form")}>
          Form
        </NavButton>
        <NavButton isActive={currentPage === "counter"} onClick={() => appState.goToPage("counter")}>
          Counter
        </NavButton>
        <NavButton isActive={currentPage === "todo"} onClick={() => appState.goToPage("todo")}>
          To Do Application
        </NavButton>
      </NavContainer>
    );
  };
  
  export default observer(Navigation);