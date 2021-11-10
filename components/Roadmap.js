import React from "react";
import { Box, Flex, Heading, Card, Text } from "rebass";
import { useTheme } from "styled-components";
import Image from "next/image";
import { ROADMAP } from "messages";
import { useFlags } from "@happykit/flags/client";

const Roadmap = () => {
  const { colors } = useTheme();
  const { flags } = useFlags();

  return (
    <Box marginTop={[5]} py={[5]}>
      <Flex
        maxWidth={["1024px"]}
        margin={["0 auto"]}
        flexDirection={["row"]}
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Flex flexBasis={["100%", "40%"]} sx={{ position: "relative" }}>
          <Card
            width={["85%", 340]}
            mx="auto"
            sx={{
              overflow: "hidden",
              borderRadius: "12px",
              border: `2px solid ${colors.light1}`,
            }}
            mb={[4, 0]}
            // ml={[0]}
          >
            <Box sx={{ position: "relative" }} height="300px">
              <Image
                src="/rug_01.png"
                alt="sample rug"
                layout="fill"
                quality={70}
              />
            </Box>
            <Box backgroundColor={colors.dark1} p={[4]}>
              <Heading fontSize={[5]} fontWeight={400} mb={[3]}>
                Techno Rug
              </Heading>
              <Flex alignItems="center">
                <Box
                  height="40px"
                  width="40px"
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "50%",
                  }}
                >
                  <Image
                    src="/zoid.png"
                    layout="fill"
                    objectFit="cover"
                    quality={70}
                  />
                </Box>
                <Heading fontSize={[3]} ml={[3]} fontWeight={400}>
                  Designer
                </Heading>
              </Flex>
            </Box>
            <Box backgroundColor={colors.dark2} px={[4]} py={[4]}>
              <Heading fontSize={[4]} fontWeight={400} color={colors.light1}>
                Original
              </Heading>
              <Heading fontSize={[4]} fontWeight={400} mt={[2]}>
                Created Oct 2021
              </Heading>
            </Box>
          </Card>
        </Flex>
        <Flex flexBasis={["100%", "50%"]} flexDirection="column" px={[4, 0]}>
          <Heading fontSize={[5, 6]} fontWeight={[700]} marginBottom={[3]}>
            Insanely low waiting time
          </Heading>
          <Heading fontSize={[4, 5]} fontWeight={[400]} color={colors.light1}>
            With an average release in less than 4 days, Golen Rugs are shifting
            the balance of power back to NFT enthusiasts.
            <br />
            <br />
            <small> Given below are stats for V1 launch:</small>
          </Heading>
          <Flex mt={[5]} justifyContent="space-between">
            {ROADMAP.map((step, i) => (
              <Flex flexDirection="column" p={[2]} key={i}>
                <Text fontSize={2}>{step.what}</Text>
                <Heading fontSize={[4]} mt={[3]}>
                  {step.when}
                </Heading>
              </Flex>
            ))}
            <Flex flexDirection="column" p={[2]}>
              <Text fontSize={2}>{flags?.launchDate}</Text>
              <Heading fontSize={[4]} mt={[3]}>
                Launch Date
              </Heading>
            </Flex>
            <Flex flexDirection="column" p={[2]}>
              <Text fontSize={2}>{flags?.launchTime}</Text>
              <Heading fontSize={[4]} mt={[3]}>
                Time
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Roadmap;
