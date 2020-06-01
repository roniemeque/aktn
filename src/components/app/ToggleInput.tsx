import React, { FunctionComponent } from "react";
import styled from "../../styles/styled";
import { css } from "@emotion/core";

const Wrapper = styled.div`
  margin: 0.5rem 0;
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  input {
    visibility: hidden;
    position: absolute;
    &:focus {
      label,
      label::before {
        background: transparent;
        box-shadow: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }
    }
  }
`;

const Toggle = styled.div<{ toggled: boolean }>`
  --size: 24px;
  background: #fff;
  height: var(--size);
  width: calc(var(--size) * 2 - 4px);
  border-radius: 50px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  transition: background-color 0.2s;
  margin-right: 0.5rem;
  cursor: pointer;
  .disc {
    background: ${({ theme }) => theme.colors.grey};
    height: calc(var(--size) - 4px);
    width: calc(var(--size) - 4px);
    border-radius: 50px;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.2s;
  }
  ${({ toggled, theme }) =>
    toggled &&
    css`
      background: ${theme.colors.blue};
      border-color: transparent;
      .disc {
        left: 100%;
        transform: translate(-100%, -50%);
      }
    `}
`;

interface Props {
  toggled: boolean;
  label?: string;
  toggle: (e: React.FormEvent<HTMLInputElement>) => void;
  name: string;
}

const ToggleInput: FunctionComponent<Props> = ({
  toggled,
  toggle,
  label = "",
  name,
}) => {
  return (
    <Wrapper>
      <label htmlFor={`toggle-${name}`}>
        <Toggle toggled={toggled}>
          <div className="disc" />
        </Toggle>
        {label}
      </label>
      <input
        onChange={toggle}
        type="checkbox"
        name={name}
        checked={toggled}
        id={`toggle-${name}`}
      />
    </Wrapper>
  );
};

export default ToggleInput;
