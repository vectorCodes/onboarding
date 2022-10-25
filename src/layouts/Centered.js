import React from "react";
import { Box, Stack, Flex } from "@chakra-ui/react";

const CenteredLayout = ({ children }) => {
  return (
    <Flex maxW="xl" m="auto" flexDirection="column">
      <Box mt={24}>
        <Stack w="full" spacing={16}>
          {children}
        </Stack>
      </Box>
    </Flex>
  );
};

export default CenteredLayout;
