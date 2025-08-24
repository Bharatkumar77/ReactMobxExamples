import HomePage from './Components/FormComponents/Form';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import { observer } from 'mobx-react';
import { useStore } from './ContextStore';
import { AppContainer, HeaderWrapper, HeaderTitle, FooterText, FooterWrapper, UserInfo, UserName, ToggleButton, Sidebar,  } from './Styles/app';
import { LogoutButton } from './Styles/homePage';
import { UserOutlined } from '@ant-design/icons';
import Navigate from './Components/Navigate';
import { ToDoWrapper } from './Components/ToDo/ToDoWrapper';
import Counter from './Components/Counter/Counter';

const App = () => {
  const { appState } = useStore();
  const handleLogout = () => {
    appState.logout();
};

  let content;
  switch (appState.currentPage) {
      case 'login':
          content = <LoginPage />;
          break;
      case 'signup':
          content = <SignupPage />;
          break;
      case 'form':
          content = <HomePage />;
          break;
        case 'counter':
        content = <Counter />
        break;
        case 'todo':
            content = <ToDoWrapper />;
            break;
      default:
          content = <LoginPage />;
  }

  return (<>
    <HeaderWrapper>
        <HeaderTitle>Mobx: A React State Manager (Demo)</HeaderTitle>
        <UserInfo>      
        <UserName>Welcome, {appState.user ? appState.user : 'Guest'}!</UserName>
        <UserOutlined style={{ fontSize: '30px', color: '#555' }} />
            {(appState.isLoggedIn && appState.currentPage !== 'login') && <LogoutButton onClick={handleLogout}>
                    Log Out
            </LogoutButton>}
        </UserInfo>
    </HeaderWrapper>
    <AppContainer>
    <ToggleButton onClick={() => { appState.toggleSidebar()}} sidebarOpen={appState.sidebarOpen}>
        {appState.sidebarOpen ? '✖' : '☰'}
      </ToggleButton>

      <Sidebar sidebarOpen={appState.sidebarOpen}>
        side bar content
      </Sidebar>
        <Navigate />
        {content}
    </AppContainer>
    <FooterWrapper>
        <FooterText>Name: Bharatkumar Madgundi</FooterText>
        <FooterText>Mail: bharatmadgundi@gmail.com</FooterText>
        <FooterText>Contact: 9767574661</FooterText>
    </FooterWrapper>
         </>
  );
};

export default observer(App);

