import styled, { keyframes } from 'styled-components';

export const Textarea = styled.textarea`
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;
    transition: all 0.2s ease-in-out;
    resize: vertical;
    &:focus {
        outline: none;
        border-color: #34d399;
        box-shadow: 0 0 0 2px #a7f3d0;
    }
`;
export const FormContainer = styled.div`
    padding: 1rem;
    width: 600px;
    margin: 0 auto;
    background-color: #f9fafb;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: #4b5563;
    margin-bottom: 1.5rem;
    text-align: center;
`;

export const FormGroup = styled.div`
    margin-bottom: 1rem;
`;

export const Input = styled.input`
    width: 90%;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;
    transition: all 0.2s ease-in-out;
    &:focus {
        outline: none;
        border-color: #34d399;
        box-shadow: 0 0 0 2px #a7f3d0;
    }
`;

// Styled Components for the display section
export const DisplayContainer = styled.div`
    padding: 1.5rem;
    background-color: #f9fafb;
    border-radius: 0.5rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const DisplayTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    color: #4b5563;
    margin-bottom: 1rem;
`;

export const ValuesGrid = styled.div`
    display: grid;
    gap: 0.75rem;
`;

export const ValueBox = styled.div`
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;
`;

export const Label = styled.label`
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #4b5563;
    margin-bottom: 0.25rem;
`;

export const Value = styled.p`
    font-size: 1rem;
    color: #4b5563;
    margin-top: 0.25rem;
    word-wrap: break-word;
`;


export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const CircularLoader = styled.div`
  border: 4px solid #f3f3f3; /* Light gray border */
  border-top: 4px solid #3498db; /* Blue top border to create the spinning effect */
  border-radius: 50%; /* Make it a perfect circle */
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite; /* Apply the animation */
`;