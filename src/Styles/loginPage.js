import styled from 'styled-components';

// Styled component for the main page container
export const PageContainer = styled.div`
    background-color: #f3f4f6; /* bg-gray-100 */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%
`;

// Styled component for the login card
export const LoginCard = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 0.75rem; /* rounded-xl */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
    width: 100%;
    max-width: 24rem; /* max-w-sm */
`;

// Styled component for the login title
export const LoginTitle = styled.h1`
    font-size: 1.875rem; /* text-3xl */
    font-weight: bold;
    text-align: center;
    color: #1f2937; /* text-gray-800 */
    margin-bottom: 1.5rem; /* mb-6 */
`;

// Styled component for the message box
export const Message = styled.div`
    background-color: #fee2e2; /* bg-red-100 */
    color: #b91c1c; /* text-red-700 */
    padding: 0.75rem;
    border-radius: 0.375rem; /* rounded-md */
    margin-bottom: 1rem; /* mb-4 */
    text-align: center;
`;

// Styled component for the form
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem; /* space-y-4 */
`;

// Styled component for the input fields
export const LoginInput = styled.input`
    width: 93%;
    padding: 0.75rem;
    border-radius: 0.375rem; /* rounded-md */
    border: 1px solid #d1d5db; /* border-gray-300 */
    transition: all 0.2s ease-in-out;
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #3b82f6; /* focus:ring-2 focus:ring-blue-500 */
        border-color: #3b82f6;
    }
`;

// Styled component for the submit button
export const LoginButton = styled.button`
    width: 100%;
    background-color: #2563eb; /* bg-blue-600 */
    color: white;
    font-weight: 600; /* font-semibold */
    padding: 0.75rem;
    border-radius: 0.375rem; /* rounded-md */
    transition: background-color 0.2s ease-in-out;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #1d4ed8; /* hover:bg-blue-700 */
    }
`;

// Styled component for the signup link container
export const SignupContainer = styled.div`
    margin-top: 1.5rem; /* mt-6 */
    text-align: center;
    color: #4b5563; /* text-gray-600 */
`;

// Styled component for the signup button/link
export const SignupButton = styled.button`
    color: #2563eb; /* text-blue-600 */
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: #1e40af; /* hover:text-blue-800 */
    }
`;