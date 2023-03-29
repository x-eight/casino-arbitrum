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
  Text,Img
} from "@chakra-ui/react";
import { CopyIcon, CheckIcon } from "@chakra-ui/icons";
import TokenSymbol from "../TokenSymbol";
import useCasinuFinance from "../../hooks/useCasinuFinance";
import dices from "../../assets/dices.svg";

type Props = {
  //children: React.ReactNode;
  address: string;
  setWalletAddress: React.Dispatch<React.SetStateAction<string>>;
};

export const Address: React.FC<Props> = ({
  //children,
  address,
  setWalletAddress,
}) => {
  const {account,updateAccount} = useCasinuFinance();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onCopy, setValue, hasCopied } = useClipboard("");

  useEffect(() => {
    console.log("account :",account)
  }, [account]);

  useEffect(() => {
    setValue(address);
  }, []);

  const disconnect = async () => {
    setWalletAddress("");
    updateAccount("0x00")
  };
  //#252A34
  //<ModalContent backgroundImage="radial-gradient(at 2rem 2rem ,rgb(41, 36, 31),rgb(7, 7, 7),rgb(133, 123, 123)) !important">
  return (
    <>
      <Button
        m="1vh"
        onClick={onOpen}
        _hover={{ color: "#EEBA35"}}
        color="#ffffff"
        variant="outline"
        w="11rem"
        h="2.5rem"
      >
        <Img w="2rem" h="2rem" src={dices} pr="0.5rem"/>
        {address?`${address.slice(0, 6)} ... ${address.slice(38, 43)}`:""}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent backgroundColor="#252A34">
          <ModalBody>
            <Center flexDirection="column" >
              <TokenSymbol symbol="CASINU" size="8rem" />
              <Text color="#ffffff" fontWeight="bold">{address?`${address.slice(0, 6)} ... ${address.slice(38, 43)}`:""}</Text>
            </Center>
            <br />
            <Flex color="#ffffff">
              <Button
                onClick={onCopy}
                flexDirection="column"
                _hover={{ color: "#EEBA35"}}
                w={["12vh", "17vh"]}
                background="#1E232F"
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
              <Button background="#1E232F" _hover={{ color: "#EEBA35"}} onClick={() => disconnect()} w={["12vh", "17vh"]} h={50}>
                Disconnect
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
