import React, { createContext, useState } from 'react';

import { LuX } from 'react-icons/lu';

import { Button } from '@core';

import { useDisclosure } from '@hook';

import {
  ButtonClosed,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Overlay
} from './styles';

interface DialogData {
  /**
  * Função que abre o dialog 
  * 
  * required: config
  */
  onOpen: (config: DialogProps) => void;
  /**
   * Função para fechar o modal
   */
  onClose: () => void;
}

type DialogProps = {
  title: string;
  description: string;
  confirm: {
    title: string;
    onPress: () => void;
  };
  cancel: {
    title: string;
    onPress: () => void;
  } | null;
}

const DialogContext = createContext<DialogData>({ } as DialogData);

export const DialogProvider: React.FC <{children: React.ReactNode}>= ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onClose, onOpen: onOpenModal } = useDisclosure();

  const [alert, setDialog] = useState<DialogProps>({
    title: '',
    description: '',
    confirm: {
      title: '',
      onPress: () => {},
    },
    cancel: null,
  });

  function onOpen(config:DialogProps) {

    setDialog(config)

    onOpenModal();
  }

  return (
    <DialogContext.Provider
      value={{
        onClose,
        onOpen,
      }}
    >
      {isOpen && (
        <>
          <Modal>
            <ModalContent>
              <ModalHeader>
                {alert.title}
                <ButtonClosed onClick={onClose}>
                  <LuX size={18} color='#8a8a8a' />
                </ButtonClosed>
              </ModalHeader>
              <ModalBody>
                {alert.description}
              </ModalBody>
              <ModalFooter>
                {alert.cancel && (
                  <Button
                    color='danger'
                    size='md'
                    variant='light'
                    onClick={() => {
                      alert.cancel?.onPress();

                      onClose();
                    }}
                  >
                    {alert.cancel.title}
                  </Button>
                )}
                <Button
                  color='primary'
                  size='md'
                  onClick={() => {
                    alert.confirm.onPress();

                    onClose();
                  }}
                >
                  {alert.confirm.title}
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Overlay onClick={onClose} />
        </>
      )}
      {children}
    </DialogContext.Provider>
  )
}

export default DialogContext;