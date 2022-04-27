import React from 'react';
import {
  // Box,
  // Text,
  // Link,
  VStack,
  // Code,
  // Grid,
  // theme,
  Spacer,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/layout';
import { FaGithub, FaSun, FaMoon, FaInstagram } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Header } from './components/Header';
import SocialMedia from './components/SocialMedia';
import { Profile } from './components/Profile';
import { useDisclosure } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

import { FaStream } from 'react-icons/fa';
import { Button } from '@chakra-ui/react';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallScreen] = useMediaQuery('(min-width: 768px)');
  const btnRef = React.useRef();
  const isDark = colorMode === 'dark';

  return (
    <>
      <VStack p="5">
        <Flex w="100%">
          <Heading
            ml={{ md: '8', lg: '1' }}
            size="md"
            fontWeight="semibold"
            color="cyan.500"
          >
            Adebisi Abdullateef
          </Heading>
          <Spacer />
          {isSmallScreen && (
            <>
              <IconButton
                mr="2"
                icon={<FaGithub />}
                isRound="true"
                onClick={() => window.open('https://www.github.com/shinaayomi')}
              />
              <IconButton
                icon={isDark ? <FaSun /> : <FaMoon />}
                isRound="true"
                onClick={toggleColorMode}
              />
            </>
          )}

          <IconButton
            icon={<FaStream />}
            isRound="true"
            ml="4"
            onClick={onOpen}
            ref={btnRef}
          />
        </Flex>
        <Header />
        <SocialMedia />
        <Profile />
      </VStack>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <IconButton
              mr="2"
              icon={<FaGithub />}
              isRound="true"
              onClick={() => window.open('https://www.github.com/shinaayomi')}
            />
            <IconButton
              mr="2"
              icon={<FaInstagram />}
              isRound="true"
              onClick={() => window.open('https://www.github.com/shinaayomi')}
            />
            <Text mt="10">Hi, Adebisi Abdullateef 🔥🔥</Text>
            <Text fontSize="14" lineHeight="8" mt="5" mb="7">
              I am frontend developer, I have hands-on work experience in User
              flow design, Sitemap, Wireframing, UI Design and prototyping for
              web and mobile devices. I have delivered projects which required
              me to go through the lifecycle approach to UX design from the
              requirements down to the implementation.
            </Text>

            <Button>Download CV</Button>
          </DrawerHeader>

          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default App;
