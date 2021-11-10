import React from "react";
import { Box, Flex } from "rebass";

import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Quote from "components/Quote";
import Mint from "components/Mint";
import Roadmap from "components/Roadmap";
import { MINT_DATE, DATE_OPTIONS } from "messages";

const Index = () => {
  return (
    <>
      <Box position="relative">
        <Box>
          <Flex
            height={["100vh"]}
            maxWidth={["1024px"]}
            margin={["0 auto"]}
            flexDirection={["column"]}
            sx={{
              backgroundImage: "url(/cheetah_transparent.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "690px 690px",
              backgroundPosition: "120% 100%",
            }}
          >
            <Header />
            <Banner />
          </Flex>
          <Quote />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Index;
