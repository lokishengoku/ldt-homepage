import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="iReview">
      <Container>
        <Title>
          iReview <Badge>2021</Badge>
        </Title>
        <P>Something here...</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Store</Meta>
            <Link href="https://play.google.com/store/apps/details?id=ldt.codeeye.ireview">
              Google Play Store <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android/iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React Native</span>
          </ListItem>
          {/* Add more ListItem for more detail */}
        </List>

        <WorkImage src="/images/works/iReview_highlight.png" alt="iReview" />
      </Container>
    </Layout>
  )
}

export default Work
