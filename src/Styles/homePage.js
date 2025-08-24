import styled from 'styled-components';

export const PageContainer = styled.div`
    // background-color: #f9fafb; // Tailwind 'bg-gray-50'
    padding: 2rem; // Tailwind 'p-8'
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Styled component for the header section
export const Header = styled.header`
    width: 100%;
    max-width: 48rem; // Tailwind 'max-w-2xl'
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem; // Tailwind 'mb-10'
`;

// Styled component for the welcome title
export const Title = styled.h1`
    font-size: 1.875rem; // Tailwind 'text-3xl'
    font-weight: 700; // Tailwind 'font-bold'
    color: #111827; // Tailwind 'text-gray-900'
`;

// Styled component for the logout button
export const LogoutButton = styled.button`
    background-color: #ef4444; // Tailwind 'bg-red-500'
    color: white;
    font-weight: 600; // Tailwind 'font-semibold'
    padding: 0.5rem 1rem; // Tailwind 'py-2 px-4'
    border-radius: 0.375rem; // Tailwind 'rounded-md'
    transition: background-color 0.2s ease-in-out;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #dc2626; // Tailwind 'hover:bg-red-600'
    }
`;

// Styled component for the main content area with the form and display
export const MainContent = styled.main`
    width: 100%;
    max-width: 48rem; // Tailwind 'max-w-2xl'
    background-color: white;
    padding: 2rem; // Tailwind 'p-8'
    border-radius: 0.75rem; // Tailwind 'rounded-xl'
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); // Tailwind 'shadow-lg'
    
    display: grid;
    grid-template-columns: 1fr; // Tailwind 'grid-cols-1'
    gap: 2rem; // Tailwind 'gap-8'

    // Media query for medium screens and above
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr; // Tailwind 'md:grid-cols-2'
    }
`;
