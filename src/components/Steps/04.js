import React from "react";
import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  Circle,
  useDisclosure,
} from "@chakra-ui/react";
import ModalLayout from "../../layouts/modal";

const Step04 = () => {
  const modal = useDisclosure();
  return (
    <Box>
      <Center>
        <Circle size="50px" bg="brand.500" color="white">
          <CheckIcon w={4} h={4} />
        </Circle>
      </Center>
      <Box mt={{ base: 6, lg: 8 }}>
        <Heading fontSize={{ base: "xl", lg: "3xl" }} textAlign={"center"}>
          Congratulations! Eren!
        </Heading>
        <Text mt={4} textAlign={"center"} textColor={"gray.500"}>
          You have completed onboarding, you can start using the Eden!
        </Text>
      </Box>
      <Box px={{ base: 8, lg: 16 }} mt={6}>
        <Button
          colorScheme="brand"
          w={"full"}
          onClick={() => {
            modal.onOpen();
          }}
        >
          Create Workspace
        </Button>
      </Box>
      <Box>
        <ModalLayout
          isOpen={modal.isOpen}
          onClose={modal.onClose}
          text="You have completed your onboarding"
        />
      </Box>
    </Box>
  );
};

export default Step04;
