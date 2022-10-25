import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import StepLayout from "../../layouts/Step";

const Step01 = () => {
  return (
    <StepLayout
      title="Welcome! First things first..."
      subTitle={"You can always change them later."}
    >
      <FormControl mt={10}>
        <FormLabel>Full Name</FormLabel>
        <Input placeholder="Steve Jobs" />
      </FormControl>
      <FormControl>
        <FormLabel>Display Name</FormLabel>
        <Input placeholder="Steve " />
      </FormControl>
      <Button colorScheme="brand">Create Workspace</Button>
    </StepLayout>
  );
};

export default Step01;
