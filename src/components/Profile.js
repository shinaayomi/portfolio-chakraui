import React from 'react';
import { Stack, Flex } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';

export const Profile = () => {
  const [isSmallScreen] = useMediaQuery('(min-width: 768px)');

  return (
    <Stack>
      <Flex
        direction={isSmallScreen ? 'row' : 'column'}
        w="100%"
        maxWiidth={{ base: '100vh', md: '110vh' }}
      ></Flex>
    </Stack>
  );
};
