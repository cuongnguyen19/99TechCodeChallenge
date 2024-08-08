import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Error = styled.div`
  color: red;
`;

export const Result = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;