import styled from "./styled";

export const Title1 = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
`;

export const Title2 = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Title3 = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const Subtitle1 = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`;

type WithActionWrapperProps = {
  actionColor?: string;
  content?: string;
};

export const WithActionWrapper = styled.div<WithActionWrapperProps>`
  display: flex;
  h1,
  h2,
  h3 {
    line-height: 1;
  }
  align-items: flex-end;
  a,
  span {
    cursor: pointer;
    font-size: 1.4rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    color: ${({ theme, actionColor }) => actionColor || theme.colors.blue};
    span {
      margin-right: 0.1rem;
      display: inline-block;
      position: relative;
      width: 1.4rem;
      height: 1.4rem;
      color: white;
      background: ${({ theme, actionColor }) =>
        actionColor || theme.colors.blue};
      border-radius: 50%;
      &::before {
        line-height: 1;
        content: "${({ content }) => content}";
        position: absolute;
        left: 50%;
        top: 44%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
