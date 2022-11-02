import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { useState } from "react";

function ModalTask({addTask}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [taskName, settaskName] = useState('')

    const FormOnChange = (event) => {
      settaskName(event.target.value)
    }
    const onClick = (event)=>{
      addTask(taskName)
      onClose()
    }

    return (
      <>
        <Button onClick={onOpen}>New Task</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader >New Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl  onChange={FormOnChange}>
                <FormLabel>Task Name</FormLabel>
                <Input type='text' name='task_name' onChange={FormOnChange}/>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClick}>
                Add
              </Button>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default ModalTask;
