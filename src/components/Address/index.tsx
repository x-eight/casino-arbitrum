import React, { useEffect } from "react";
import {
  Button,
  useDisclosure,
  useClipboard,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  Flex,
  Center,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { CopyIcon, CheckIcon } from "@chakra-ui/icons";

type Props = {
  //children: React.ReactNode;
  address: string;
  balance: number;
  setWalletAddress: React.Dispatch<React.SetStateAction<string>>;
};

export const Address: React.FC<Props> = ({
  //children,
  address,
  balance,
  setWalletAddress,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { onCopy, setValue, hasCopied } = useClipboard("");

  useEffect(() => {
    setValue(address);
  }, []);

  const disconnect = async () => {
    setWalletAddress("");
  };

  return (
    <>
      <Button
        m="1vh"
        onClick={onOpen}
        backgroundColor="transparent"
        colorScheme="white"
        variant="outline"
        w="20vh"
        h="5vh"
      >
        Address: {`${address.slice(0, 6)}...${address.slice(38, 43)}`}
        <br />
        Balance: {balance.toFixed(2)} ETH
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Center flexDirection="column">
              Address: {`${address.slice(0, 6)}...${address.slice(38, 43)}`}
              <br />
              <Text>Balance: {balance.toFixed(2)} ETH</Text>
            </Center>
            <br />
            <Flex>
              <Button
                onClick={onCopy}
                flexDirection="column"
                w={["12vh", "15vh"]}
                h={50}
              >
                {!hasCopied ? (
                  <>
                    <CopyIcon />
                    Copy Address
                  </>
                ) : (
                  <>
                    <CheckIcon />
                    Copied!
                  </>
                )}
              </Button>

              <Spacer />
              <Button onClick={() => disconnect()} w={["12vh", "15vh"]} h={50}>
                Disconnect
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
