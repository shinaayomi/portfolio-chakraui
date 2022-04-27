import React from 'react';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';
import { useMediaQuery } from '@chakra-ui/media-query';

export const Header = () => {
  const { colorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  const [isSmallScreen] = useMediaQuery('(min-width: 768px)');

  return (
    <Stack>
      {isSmallScreen && (
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
      )}

      <Flex
        direction={isSmallScreen ? 'row' : 'column'}
        spacing="200px"
        p={isSmallScreen ? '24' : '6'}
        alignSelf="flex-start"
      >
        <Box mt={isSmallScreen ? '0' : '16'} alignSelf="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize={isSmallScreen ? '7xl' : '6xl'}
            fontWeight="bold"
            bgGradient="linear(to-r,purple.300,green.200,cyan.400)"
            bgClip="text"
          >
            Adebisi Abdullateef
          </Text>
          <Text color={isDark ? 'gray.500' : 'gray.700'}>
            Frontend Engineer
          </Text>
          <Button mt={5} colorScheme="blue">
            Hire me
          </Button>
        </Box>
      </Flex>
    </Stack>
  );
};
// width= {{ 'sm': '10px', 'md': '20px'}}
