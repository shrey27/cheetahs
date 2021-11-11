import React from "react";
import { Flex, Heading, Box } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import Button from "components/Button";
import { LinkExternal as Link } from "components/Links";

const OutlineHeading = styled(Heading)`
  color: ${(props) => props.theme.colors.primary};
  text-shadow: ${({ theme }) => `
   ${theme.colors.light} 0px 0px 1px, ${theme.colors.light} 0px 0px 1px, ${theme.colors.light} 0px 0px 1px,
    ${theme.colors.light} 0px 0px 1px, ${theme.colors.light} 0px 0px 1px, ${theme.colors.light} 0px 0px 1px;
  `};
  -webkit-font-smoothing: antialiased;
`;
const Banner = (props) => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection="row"
      paddingTop={["76px"]}
      justifyContent="space-between"
    >
      <Flex flexBasis={["90%"]} flexDirection="column" width={['30vw']}>
        <Heading fontSize={[4, 6]} fontWeight={[500]} marginBottom={[0]}>
          THE
        </Heading>
        <OutlineHeading fontSize={[4, 6]} fontWeight={[500]} marginBottom={[0]} >
          SHAPE SHIFTER
        </OutlineHeading>
        <Heading fontSize={[4, 6]} fontWeight={[500]} marginBottom={[5]}>
          CHEETAH
        </Heading>
        <Link
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Button>FIND MORE</Button>
        </Link>
      </Flex>
      {/* <Box sx={{ position: "relative" }} height="100%" width="100%" mb={[3, 0]}>
        <Image
          src={`/cheetah_transparent.png`}
          alt={`bender`}
          layout="fill"
          objectFit="contain"
          quality="70"
        />
      </Box> */}
    </Flex>
  );
};

export default Banner;
