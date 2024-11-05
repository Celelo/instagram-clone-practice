import { useState } from 'react';

import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { RiAddBoxLine } from "react-icons/ri";

export const NewPostModal = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [input, setInput] = useState('')
      const isError = input === ''

    return (
        <>
            <Button variant='outline' onClick={onOpen}
                leftIcon={<RiAddBoxLine />}>Abrir modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>
                                Titulo
                            </FormLabel>
                            <Input type='text' />
                            <FormHelperText>El titulo es obligatorio</FormHelperText>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                        <Button variant='ghost'>Aceptar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}