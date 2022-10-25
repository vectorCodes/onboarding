import React from "react";
import {
  Box,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

const ModalLayout = ({ isOpen, onClose, text }) => {
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>On Boarding</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size={"md"}>{text}</Heading>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose} variant="ghost">
              Close
            </Button>
            <Button colorScheme={"brand"}>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ModalLayout;
