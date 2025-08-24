import React from 'react'
import { observer } from 'mobx-react';
import { useStore } from '../ContextStore';
import { PageContainer, SignupCard, SignupTitle, SignupForm, SignupInput, SignupButton, Message, LoginContainer, LoginButton } from '../Styles/signupPage';


const SignupPage = () => {
    const { appState } = useStore();
    const {message, email, username, setUsername, password, setEmail, setMessage, setPassword} = appState;

    const handleSignup = (e) => {
        e.preventDefault();
        if (username && email && password) {
            setMessage('Signup successful! Please log in.');
            setTimeout(() => {
                appState.goToPage('login');
            }, 1500);
        } else {
            setMessage('Please fill out all fields.');
        }
    };

    const isSuccessful = message.includes('successful');

    return (
        <PageContainer>
            <SignupCard>
                <SignupTitle>Sign Up</SignupTitle>
                {message && (
                    <Message success={isSuccessful}>
                        {message}
                    </Message>
                )}
                <SignupForm onSubmit={handleSignup}>
                    <SignupInput
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <SignupInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <SignupInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <SignupButton type="submit">
                        Sign Up
                    </SignupButton>
                </SignupForm>
                <LoginContainer>
                    Already have an account?{' '}
                    <LoginButton onClick={() => appState.goToPage('login')}>
                        Log In
                    </LoginButton>
                </LoginContainer>
            </SignupCard>
        </PageContainer>
    );
};

export default observer(SignupPage);
