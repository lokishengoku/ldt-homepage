import Head from 'next/head'
import NoSsr from '../no-ssr'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelLdt from '../voxel-ldt'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          {' '}
          Thuan Le Duc {'<'}Codeeye{'>'} - Homepage
        </title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelLdt />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
