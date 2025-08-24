import styled from 'styled-components';

export const ContentWrapper = styled.div`
    width: 100%;
    background-color: white;
    padding: 2rem;
    border-radius: 0.75rem; /* rounded-xl */
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
`;

export const PageContainer = styled.div`
    // background-color: #f9fafb; // Tailwind 'bg-gray-50'
    padding: 2rem; // Tailwind 'p-8'
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
`;

// Title
export const Title = styled.h1`
    font-size: 2.25rem; /* text-4xl */
    font-weight: bold;
    text-align: center;
    color: #111827; /* text-gray-900 */
    margin-bottom: 2rem; /* mb-8 */
`;

// Form Component Styles
export const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 1rem; /* space-x-4 */
    margin-bottom: 1.5rem; /* mb-6 */
`;

export const FormInput = styled.input`
    flex-grow: 1;
    padding: 0.75rem;
    font-size: 1.125rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.2s, border-color 0.2s;
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #6366f1;
        border-color: #6366f1;
    }
`;

export const FormButton = styled.button`
    padding: 0.75rem;
    font-size: 1.125rem;
    font-weight: bold;
    color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s;
    border: none;
    cursor: pointer;

    background-color: ${props => props.disabled ? '#9ca3af' : '#4f46e5'}; /* bg-gray-400 vs bg-indigo-600 */
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    &:hover {
        background-color: ${props => props.disabled ? '#9ca3af' : '#4338ca'}; /* hover:bg-indigo-700 */
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #6366f1, 0 0 0 4px rgba(99, 102, 241, 0.2);
    }
`;

// Controls Component Styles
export const ControlsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem; /* mb-6 */
    
    @media (min-width: 640px) {
        flex-direction: row;
        gap: 0;
        > div {
          gap: 0.5rem;
        }
    }
`;

export const SearchInput = styled.input`
    flex-grow: 1;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.2s, border-color 0.2s;
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #6366f1;
        border-color: #6366f1;
    }
`;

export const FilterButton = styled.button`
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    transition: all 0.2s;
    border: none;
    cursor: pointer;

    background-color: ${props => props.active ? '#4f46e5' : '#e5e7eb'}; /* bg-indigo-600 vs bg-gray-200 */
    color: ${props => props.active ? 'white' : '#4b5563'}; /* text-white vs text-gray-700 */
    box-shadow: ${props => props.active ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};

    &:hover {
        background-color: ${props => props.active ? '#4338ca' : '#d1d5db'}; /* hover:bg-indigo-700 vs hover:bg-gray-300 */
    }
`;

export const ClearButton = styled.button`
    padding: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s;
    border: none;
    cursor: pointer;

    background-color: ${props => props.disabled ? '#9ca3af' : '#ef4444'}; /* bg-gray-400 vs bg-red-500 */
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    &:hover {
        background-color: ${props => props.disabled ? '#9ca3af' : '#dc2626'}; /* hover:bg-red-600 */
    }
`;

// List and Item Styles
export const TodoListContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem; /* space-y-4 */
`;

export const TodoItemContainer = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition: transform 0.2s;
    &:hover {
        transform: translateY(-2px);
    }
`;

export const TodoTextWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const TodoText = styled.span`
    font-size: 1.125rem;
    font-weight: 500;
    color: ${props => props.completed ? '#9ca3af' : '#1f2937'};
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
    transition: all 0.2s;
`;

export const RemoveButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    background-color: #ef4444; /* bg-red-500 */
    border-radius: 0.375rem;
    transition: background-color 0.2s;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #dc2626; /* hover:bg-red-600 */
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #ef4444, 0 0 0 4px rgba(239, 68, 68, 0.2);
    }
`;

export const NoTodosMessage = styled.p`
    text-align: center;
    color: #6b7280; /* text-gray-500 */
    margin-top: 2rem;
`;