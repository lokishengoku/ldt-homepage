import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbnailIReview from '../public/images/works/iReview_highlight.png'
import thumbnailPenguinReader from '../public/images/works/penguin_reader_highlight.jpg'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id={'i-review'}
            title={'iReview'}
            thumbnail={thumbnailIReview}
          >
            A movie search & review mobile app, built with React Native, working
            on both IOS and Android Devices
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id={'penguin-reader'}
            title={'Penguin Reader'}
            thumbnail={thumbnailPenguinReader}
          >
            A novel reader mobile app, built with React Native, working on both
            IOS and Android Devices
          </WorkGridItem>
        </Section>

        {/* TODO: add more project; edit poster */}
      </SimpleGrid>
    </Container>
  )
}

export default Works
