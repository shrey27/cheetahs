import React from "react";
import { Box, Flex, Heading } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.dark2};
`;

const Quote = () => {
  const { colors } = useTheme();
  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, ${colors.accent1} 100%, transparent 0%)`,
      }}
      py={[3]}
    >
      <Flex
        maxWidth={["1000px"]}
        margin={["0 0"]}
        flexDirection={["row"]}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Box
          sx={{ position: "relative" }}
          height="150px"
          width="150px"
          mb={[3, 0]}
        >
          <Image
            src={`/julie_mao.jpg`}
            alt={`bender`}
            layout="fill"
            objectFit="cover"
            quality="70"
          />
        </Box>
        <Box flexBasis={["100%", "70%"]} marginLeft={[0, 5]} px={[4, 0]}>
          <Heading fontSize={[3, 4]} fontWeight={[500]} color={colors.dark}>
            “The Cheating Cheetah has different mood and appearance for
            different people, it shows you what you wanna see... Don't fall for
            his tricks”
          </Heading>
          <Heading
            fontSize={[3, 5]}
            fontWeight={[600]}
            marginTop={[1]}
            color={colors.dark2}
          >
            Boss Lady, <StyledSpan>Designer</StyledSpan>
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default Quote;
