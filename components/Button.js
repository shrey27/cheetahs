import styled, { css } from "styled-components";

export const buttonCss = css`
  border: none;
  font-weight: 600;
  color: ${(props) => props.theme.colors.light};
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.light};
  max-width: 200px;
  min-width: 200px;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 1rem 0rem;
  pointer-events: auto;
  cursor: pointer;
  :hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.15) 0 0);
  }
`;
const StyledButton = styled.button`
  ${buttonCss}
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 30px;
`;

export default StyledButton;
