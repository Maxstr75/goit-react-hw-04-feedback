import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 5px 15px;
  border-radius: 4px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 20%);
  text-transform: capitalize;
  font-weight: bold;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
  :hover,
  :focus {
    background-color: teal;
    color: white;
    transition: all 0.2s;
  }
`;
