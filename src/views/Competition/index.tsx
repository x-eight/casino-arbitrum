import React from 'react';
import { Flex,Text } from '@chakra-ui/react';
import TopList from '../../components/Top-list';


const Competition = () => {
    return (
      <Flex m={"5rem auto 0rem auto"} flexDir="column" w="99%" p="2rem" backgroundColor="#FFFFFF" borderRadius="1rem">
        <Text color="black" fontWeight="bold">Top Players</Text>
        <Text color="black">Start : 2023-03-17 06:00 PM UTC</Text>
        <Text color="black" mb="1rem">End : 2023-03-24 06:00 PM UTC</Text>
        <TopList/>
      </Flex>
    )
  }
  
  export default Competition