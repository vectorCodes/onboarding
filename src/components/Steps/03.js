import React, { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { HiUser, HiUsers } from "react-icons/hi";

import StepLayout from "../../layouts/Step";
import Card from "../Card";

const Step03 = () => {
  return (
    <StepLayout
      title="How are you planning to use Eden?"
      subTitle={"We'll streamline your setup exprience accordingly."}
    >
      <HStack spacing={4} mt={6}>
        <Card
          title={"For myself"}
          subTitle={"Write better. Think more clearly.Stay organized"}
          icon={<HiUser size={25} color="#664DE5" />}
        />
        <Card
          title={"For myself"}
          subTitle={"Write better. Think more clearly.Stay organized"}
          icon={<HiUsers size={25} color="#664DE5" />}
        />
      </HStack>
      <Button colorScheme="brand">Create Workspace</Button>
    </StepLayout>
  );
};

export default Step03;
