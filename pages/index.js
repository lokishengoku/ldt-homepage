import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Button,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.300')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a mobile developer based in Vietnam!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant={'page-title'}>
            Thuan Le Duc
          </Heading>
          <p>CodeEye ( Android, React Native, Flutter )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align={'center'}
        >
          <Image
            borderColor={'whiteAlpha.800'}
            borderWidth={2}
            borderStyle={'solid'}
            maxWidth={'100px'}
            display={'inline-block'}
            borderRadius={'full'}
            src={'/images/ldt_face.jpg'}
            alt={'Profile Image'}
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as={'h3'} variant={'section-title'}>
          Work
        </Heading>
        <Paragraph>
          I&apos;m a mobile developer based in Vietnam with a passion for making
          interesting mobile applications and many other digital stuffs I want.
          I have several projects that have been made with many
          languages/frameworks such as Android Java, React Native, Flutter, Java
          Swing, Arduino C/C++, ... In my free time, I love reading novels and
          watching MMA/Boxing. Currently, I&apos;m spending my time to improve
          my Flutter skill.
        </Paragraph>
        <Box align={'center'} my={4}>
          <NextLink href={'/works'}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme={'teal'}>
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as={'h3'} variant={'section-title'}>
          Bio
        </Heading>

        <BioSection>
          <BioYear>2000</BioYear>
          Born in Hatinh, Vietnam.
        </BioSection>
        <br />
        <BioSection>
          <BioYear>2018 - Present</BioYear>
          Studying Information Technology (Engineering Degree) at Danang
          University of Science
        </BioSection>
        <Heading as={'h3'} variant={'section-title'}>
          I ❤
        </Heading>
        <Paragraph>
          Reading, Playing, Learning, Coding, Novel, Rocket, Mechanical Stuff,
          ...
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
