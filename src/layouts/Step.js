import React from "react";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const StepLayout = ({ title, subTitle, children }) => {
  return (
    <Box cursor={"pointer"}>
      <Heading fontSize={{ base: "2xl", lg: "3xl" }} textAlign={"center"}>
        {title}
      </Heading>
      <Text mt={4} textColor={"gray.500"} textAlign="center">
        {subTitle}
      </Text>

      <Stack px={{ base: 8, lg: 16 }} spacing={6}>
        {children}
      </Stack>
    </Box>
  );
};

export default StepLayout;
