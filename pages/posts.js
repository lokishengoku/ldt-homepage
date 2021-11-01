import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import portfolioThumb from '../public/images/contents/portfolio_tut_thumb.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={3}>
        Recommended Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to build a portfolio website using Next.js, Chakra UI, Framer Motion, and Three.js"
            thumbnail={portfolioThumb}
            href="https://www.youtube.com/watch?v=bSMZgXzC9AA&list=PLfrx-330ZG3J5hAZyinJQ7usGTd_1VdV9&index=2"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
