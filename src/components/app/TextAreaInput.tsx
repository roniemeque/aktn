import React, { FunctionComponent } from "react";
import styled from "../../styles/styled";

const Wrapper = styled.div<{ invalid?: boolean }>`
  --grey: #f5f5f5;
  textarea {
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
  onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}

const TextAreaInput: FunctionComponent<Props> = ({
  className = "",
  name,
  value,
  onChange,
  label = "",
  placeHolder = "",
}) => {
  return (
    <Wrapper className={className}>
      {!!label && <label htmlFor={`input-${name}`}>{label}</label>}
      <textarea
        placeholder={placeHolder}
        id={`input-${name}`}
        name={name}
        value={value}
        onChange={onChange}
      ></textarea>
    </Wrapper>
  );
};

export default TextAreaInput;
