import styled from 'styled-components';

// Reusing styled components from LoginPage for consistency
// These should ideally be in a shared 'styles' file to avoid duplication
export const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%
`;

export const SignupCard = styled.div`
    background-color: white;
    padding: 2.5rem;
    border-radius: 0.75rem; /* rounded-xl */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
    width: 100%;
`;

export const SignupTitle = styled.h1`
    font-size: 1.875rem; /* text-3xl */
    font-weight: bold;
    text-align: center;
    color: #1f2937; /* text-gray-800 */
    margin-bottom: 1.5rem; /* mb-6 */
`;

export const Message = styled.div`
    padding: 0.75rem;
    border-radius: 0.375rem; /* rounded-md */
    margin-bottom: 1rem; /* mb-4 */
    text-align: center;

    /* Dynamic styles based on success/error message */
    background-color: ${props => props.success ? '#dcfce7' : '#fee2e2'}; /* bg-green-100 or bg-red-100 */
    color: ${props => props.success ? '#166534' : '#b91c1c'}; /* text-green-700 or text-red-700 */
`;

export const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem; /* space-y-4 */
`;

export const SignupInput = styled.input`
    width: 88s%;
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

export const SignupButton = styled.button`
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

export const LoginContainer = styled.div`
    margin-top: 1.5rem; /* mt-6 */
    text-align: center;
    color: #4b5563; /* text-gray-600 */
`;

export const LoginButton = styled.button`
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