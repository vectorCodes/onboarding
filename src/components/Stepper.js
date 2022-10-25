import React from "react";
import { Box, HStack, Circle } from "@chakra-ui/react";

const STEPPER_SIZE = 10;

const Stepper = ({ max = 4, currentStep = 1, onStepChange }) => {
  return (
    <HStack spacing={0} px={{ base: 10, lg: 20 }}>
      {Array.from({ length: max }, (_, i) => i + 1).map((step, i) => {
        console.log(
          "step",
          step,
          "currentStep",
          currentStep,
          "max",
          max,
          "i",
          i
        );
        return (
          <>
            <Circle
              key={i}
              h={STEPPER_SIZE}
              w={STEPPER_SIZE}
              bg={step <= currentStep ? "brand.500" : "transparent"}
              color={step <= currentStep ? "white" : "gray.500"}
              onClick={() => {
                onStepChange(step);
              }}
              cursor="pointer"
            >
              {step}
            </Circle>
            {step < max && (
              <Box w="full">
                <Box
                  h={0.5}
                  w={step === currentStep ? "50%" : "full"}
                  bg={step <= currentStep ? "brand.500" : "transparent"}
                ></Box>
              </Box>
            )}
          </>
        );
      })}
    </HStack>
  );
};

export default Stepper;
