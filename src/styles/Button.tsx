import styled from "./styled";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  border-radius: ${(p) => p.theme.border.small};
  color: white;
  padding: 0.5rem 0.9rem;
  outline: none;
  border: none;
  font-size: 1.1rem;
  box-shadow: rgb(201, 201, 201) 0px 1px 2px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: rgb(201, 201, 201) 0px 2px 3px;
  }
  &:focus {
    transform: translateY(0.5px);
    box-shadow: rgb(201, 201, 201) 0px 0px 1px;
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.greyDarker};
  }
`;
