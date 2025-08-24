import styled from "styled-components";

// Styled component for the button container
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

// Styled component for the individual button
export const NavButton = styled.button`
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 16px;
  position: relative;
  transition: opacity 0.3s ease-in-out;
  
  // The underline effect is created using the :after pseudo-element
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  // The underline becomes visible on hover
  &:hover:after {
    opacity: 0.2;
  }
  
  // A prop "isActive" is used to set the active state
  ${(props) =>
    props.isActive &&
    `
    opacity: 1;
    &:after {
      opacity: 1; // Underline is active
    }
  `}

  // Buttons that are not active have reduced opacity
  ${(props) =>
    !props.isActive &&
    `
    opacity: 0.7;
  `}
`;
