import React from "react";
import styled, { useTheme } from "styled-components";
import { Text } from "rebass";

const StyledFooter = styled.footer`
  display: flex;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.dark};
  justify-content: center;
  align-items: center;
  height: 64px;
`;
const Footer = () => {
  const { colors } = useTheme();
  return (
    <StyledFooter>
      <Text color={colors.dark2}>SHAPE SHIFTING NFTs</Text>
    </StyledFooter>
  );
};

export default Footer;
