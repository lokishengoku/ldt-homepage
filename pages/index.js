import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Button,
  Image,
  Link,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDiscord
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
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
            About me
          </Heading>
          <Paragraph>
            I&apos;m a mobile developer based in Vietnam with a passion for
            making interesting mobile applications and many other digital kinds
            of stuff. I have several projects that have been made with many
            languages/frameworks such as Android Java, React Native, Flutter,
            Java Swing, Arduino C/C++, ... In my free time, I love reading
            novels and watching MMA/Boxing. Currently, I&apos;m spending my time
            improving my Flutter skill and studying at my university.
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
            Education
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
        <Section delay={0.3}>
          <Heading as="h3" variant="sections-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/lokishengoku" target="_blank">
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @lokishengoku
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://facebook.com/ldtlodsiker/" target="_blank">
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoFacebook} />}
                >
                  @ldtlodsiker
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/justldt/" target="_blank">
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @justldt
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/le-duc-thuan-bb05a2220/"
                target="_blank"
              >
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Linkedin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://discordapp.com/users/584436123707768852"
                target="_blank"
              >
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  Discord
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
