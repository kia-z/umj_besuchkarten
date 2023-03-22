import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Row, Col, Container, Button} from 'react-bootstrap'

const newDate = new Date()
const date = newDate.getDate()
const month = newDate.getMonth() + 1;
const year = newDate.getFullYear()

export default function Home() {
  return (
    <>
      <Head>
        <title>UMJ feedback</title>
        <meta name="description" content="Test with UMJ, March 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://kia-z.github.io/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Row>
          <Col>
          <p>
            {date}-{month}-{year}
          </p>
          </Col>
          <Col>
          <Image
                src="https://kia-z.github.io/overviewUMJ.jpg"
                alt="UMJ image"
                width={200}
                height={200}
              />
          </Col>
          </Row>
        </Container>
        
        <Container>
            <h1>Your feedback is important</h1>
        </Container>

        <Container className='mt-5'>
        <Row>
          <Col>
          <Button variant="primary" size="lg" href='https://kia-z.github.io/deutsch'>Deutsch</Button>
          </Col>
          <Col>
          <Button variant="primary" size="lg" href='https://kia-z.github.io/english'>English</Button>
          </Col>
        </Row>
        </Container>

        <Container className='mt-5'><Link href="https://kia-z.github.io/extraquestions">Other possible formats for questions</Link></Container>
      </main>
    </>
  )
}
