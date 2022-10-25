import React from "react";
import {
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  chakra,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import StepLayout from "../../layouts/Step";

const Step02 = () => {
  return (
    <StepLayout
      title={"Let's set up a home for all your work"}
      subTitle={" You can always change them later."}
    >
      <FormControl mt={10}>
        <FormLabel>Workspace Name</FormLabel>
        <Input placeholder="Steve Jobs" />
      </FormControl>

      <FormControl>
        <FormLabel display="flex" alignItems="center" gap={2}>
          Workspace URL{" "}
          <chakra.span>
            <Text textColor={"gray.400"} fontSize="sm">
              (optional)
            </Text>
          </chakra.span>
        </FormLabel>
        <InputGroup>
          <InputLeftAddon children="www.eden.com/" />
          <Input placeholder="Example" />
        </InputGroup>
      </FormControl>
      <Button colorScheme="brand">Create Workspace</Button>
    </StepLayout>
  );
};

export default Step02;
