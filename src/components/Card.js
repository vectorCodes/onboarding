import React from "react";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";

const Card = ({ title, subTitle, icon }) => {
  return (
    <Box
      borderWidth={"1.5px"}
      borderColor="brand.500"
      rounded={"lg"}
      p={{ base: 4, lg: 6 }}
    >
      <Stack>
        <Box>{icon}</Box>
        <Heading size={"md"}>{title}</Heading>
        <Text textColor={"gray.500"}>{subTitle}</Text>
      </Stack>
    </Box>
  );
};

export default Card;
