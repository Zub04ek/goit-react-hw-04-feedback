import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  &:hover {
    background-color: #2389da;
    color: #f9fafc;
  }
`;
