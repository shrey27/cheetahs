import React from "react";
import { Flex, Heading, Box } from "rebass";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import { SiDiscord } from "react-icons/si";
import NavLink from "next/link";
import { LinkExternal as Link } from "components/Links";

const StyledHeader = styled.nav`
  padding: 40px 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  backdrop-filter: blur(5px);
  @media (min-width: 1024px) {
    padding: 60px 0;
  }
`;
const Header = () => {
  const { colors } = useTheme();

  return (
    <>
      <StyledHeader>
        <Flex flexBasis="50%">
          <NavLink href="/">
            <Box
              sx={{
                overflow: "hidden",
                position: "relative",
              }}
              height="120px"
              width="120px"
              mb={[3, 0]}
            >
              <Image
                src={`/logo.png`}
                alt={`bender`}
                layout="fill"
                objectFit="cover"
                quality="70"
              />
            </Box>
          </NavLink>
        </Flex>
        <Flex
          flexBasis={["50%"]}
          justifyContent="flex-end"
          alignItems="center"
          pl={[3]}
        >
          <Link
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiDiscord fill={colors.light} size="36px" />
          </Link>
        </Flex>
      </StyledHeader>
    </>
  );
};

export default Header;
