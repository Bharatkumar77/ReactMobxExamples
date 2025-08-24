import styled from 'styled-components';

export const CountDisplay = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CounterButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004085;
  }
`;
