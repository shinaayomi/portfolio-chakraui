import { HStack } from '@chakra-ui/layout';
import React from 'react';
import { Icon } from '@chakra-ui/icon';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function SocialMedia() {
  return (
    <HStack spacing="10">
      <Icon as={FaFacebookF} boxSize={30} />
      <Icon as={FaTwitter} boxSize={30} />
      <Icon as={FaLinkedin} boxSize={30} />
    </HStack>
  );
}
