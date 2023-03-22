import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Row, Col, Container, Button, Form} from 'react-bootstrap'

const newDate = new Date()
const date = newDate.getDate()
const month = newDate.getMonth() + 1;
const year = newDate.getFullYear()

export default function extraQuestions() {

  return (
    <>
      <Head>
        <title>UMJ feedback</title>
        <meta name="description" content="Test with UMJ, March 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://kia-z.github.io/umj_besuchkarten/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Row>
          <Col>
          <p>
            {date}-{month}-{year}
          </p>
          <Button href='https://kia-z.github.io/umj_besuchkarten/deutsch'>Deutsch</Button>
          </Col>
          <Col>
          <Image
                src="https://kia-z.github.io/umj_besuchkarten/overviewUMJ.jpg"
                alt="UMJ image"
                width={200}
                height={200}
              />
          </Col>
          </Row>
        </Container>
        
   <Form>
<h1>optional types of questions</h1>
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
        <div className="mb-3 mt-5">
        <p>Did you like the visit overall?</p>
          <Form.Check
            inline
            label="A lot"
            name="group1"
            type='radio'
          />
          <Form.Check
            inline
            label="neither loved nor hated"
            name="group1"
            type='radio'
          />
          <Form.Check
            inline
            label="didn't like"
            name='group1'
            type='radio'
          />
        </div>

    </Form>

      </main>
    </>
  )
}
