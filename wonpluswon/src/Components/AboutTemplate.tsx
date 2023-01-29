import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
 
  export default function CallToActionWithIllustration() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            wonpluswon{' '}
            <Text as={'span'} color={'#b2f5ea'}>
              Be Extraordinary
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          Learning is a part of Education and can be learned from anyone around 
          us, even from an ant, who teaches us to try until we achieve success. 
          Therefore, one needs to adapt, learn, and educate oneself to become knowledgeable.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}>
              Get started
            </Button>
            {/* <Button rounded={'full'} px={6}>
              Learn more
            </Button> */}
          </Stack>
          
          
        </Stack>
      </Container>
    );
  }
 
  