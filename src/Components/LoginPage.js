import React, { useEffect } from 'react'
import { observer } from 'mobx-react';
import { useStore } from '../ContextStore';
import { PageContainer, LoginCard, LoginTitle, Message, LoginForm, LoginInput, SignupContainer,  SignupButton, LoginButton} from '../Styles/loginPage';


const LoginPage = () => {
    const { appState } = useStore();
    const { message, username, password, setMessage, setPassword, setUsername } = appState;


    useEffect(() => {
        appState.logout();
    }, []);

    const handleLogin = (e) => {
        try {
            e.preventDefault();
            if (username && password) {
                appState.login(username);
            } else {
                setMessage('Please enter a username and password.');
            }
        } catch (error) {
            console.error("Error during login:", error);
            setMessage('An error occurred. Please try again.');
        }
        
    };

    return (
        <PageContainer>
            <LoginCard>
                <LoginTitle>Login</LoginTitle>
                {message && (
                    <Message>
                        {message}
                    </Message>
                )}
                <LoginForm onSubmit={handleLogin}>
                    <LoginInput
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                    <LoginInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <LoginButton type="submit">
                        Log In
                    </LoginButton>
                </LoginForm>
                <SignupContainer>
                    Don't have an account?{' '}
                    <SignupButton onClick={() => {appState.goToPage('signup')}}>
                        Sign Up
                    </SignupButton>
                </SignupContainer>
            </LoginCard>
        </PageContainer>
    );
};

export default observer(LoginPage);
