import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: #333;
  border-bottom: 1px solid #ccc;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px; /* Space between icon and name */
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  color: #fff;
  padding-left: 100px
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between icon and name */
  flex-direction: row;
  justify-content: flex-end;
`;


export const UserName = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const AppContainer = styled.div`
    height: calc(100vh - 102px);
    overflow: auto;
    background-color: #f9fafb; /* bg-gray-50 */
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    background-color: #f3f4f6; /* bg-gray-100 */
`;

export const FooterWrapper = styled.div`
  background-color: #313131;
  color: #fff;
  text-align: center;
  border-top: 1px solid #444;
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 40px;
`;

export const FooterText = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

export const Sidebar = styled.div`
  position: fixed; /* Use fixed to keep it in place on scroll */
  top: 60px;
  left: 0;
  height: calc(100vh - 151px);
  width: 800px;
  background: ${props => (props.sidebarOpen ? 'azure' : '#4f4f4f')};
  border-right: 1px solid #ccc;
  transform: translateX(${props => (props.sidebarOpen ? '0' : '-770px')});
  transition: transform 0.3s ease-in-out;
  padding-top: 50px; /* Space for the header or toggle button */
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  z-index: 1000;
  padding-left: 20px; /* Add padding to the left for better spacing */
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 60px;
  left: 10px;
  z-index: 1001; /* Ensure it's above the sidebar */
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 24px;
  color: ${props => (props.sidebarOpen ? '#000' : '#fff')};
  transition: transform 0.3s ease-in-out;
  left: ${props => (props.sidebarOpen ? '760px' : '10px')};
  &:hover {
    color: #000;
  }
`;

export const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  padding: 10px 20px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;
