import React, { FunctionComponent } from "react";
import styled from "../../styles/styled";

const Wrapper = styled.div<{ invalid?: boolean }>`
  --grey: #f5f5f5;
  input {
    outline: none;
    color: black;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.greyDarker};
    background: var(--grey);
    border-radius: 3px;
    transition: all 0.2s;
    &:focus {
      border-color: ${({ theme }) => theme.colors.blue};
      transform: scale(1.01) translateY(-1px);
      box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
    }
    &::placeholder {
      color: grey;
      font-weight: normal;
    }
  }
`;

interface Props {
  className?: string;
  name: string;
  value: string | number;
  placeHolder?: string;
  label?: string;
  type?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const TextInput: FunctionComponent<Props> = ({
  className = "",
  name,
  value,
  placeHolder = "",
  onChange,
  type = "text",
  label = "",
}) => {
  return (
    <Wrapper className={className}>
      {!!label && <label htmlFor={`input-${name}`}>{label}</label>}
      <input
        id={`input-${name}`}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
        type={type}
      ></input>
    </Wrapper>
  );
};

export default TextInput;
