import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Row, Col, Container, Button, Form} from 'react-bootstrap'
import creds from '../umjfeedback.json'
import { useState } from 'react'

const { GoogleSpreadsheet } = require('google-spreadsheet');

const newDate = new Date()
const date = newDate.getDate()
const month = newDate.getMonth() + 1;
const year = newDate.getFullYear()

export default function Deutsch() {

    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const [answerComment, setAnswerComment] = useState();
    const [answerStatus, setAnswerStatus] = useState();
    const [answerName, setAnswerName] = useState();
    const [answerCountry, setAnswerCountry] = useState();
    const [answerContact, setAnswerContact] = useState();
    const [answerEmail, setAnswerEmail] = useState();
    const [answerDate, setAnswerDate] = useState();
    
    const appendSpreadsheet = async () => {
        try {
            await doc.useServiceAccountAuth(creds);
            await doc.loadInfo();
            const sheetA = doc.sheetsById[0];
    
            const CommentA = JSON.stringify(answerComment)
            const StatusA = JSON.stringify(answerStatus)
            const NameA = JSON.stringify (answerName)
            const CountryA = JSON.stringify (answerCountry)
            const ContactA = JSON.stringify(answerContact)
            const EmailA = JSON.stringify(answerEmail)
            const DateA = JSON.stringify(answerDate)
    
            const ResultsAdding = await sheetA.addRow({
                comment: CommentA,
                status: StatusA,	
                name: NameA,
                country: CountryA,
                contact: ContactA,
                email: EmailA,
                date: DateA
            });
            return ResultsAdding;
            } catch (e) {
                console.error("Error:", e)
            }
    }
    
    const onOptionChangeComment = e => {
        setAnswerComment(e.target.value)
    }
    
    const onOptionChangeStatus = e => {
        setAnswerStatus(e.target.value)
    }
    const onOptionChangeName = e => {
        setAnswerName(e.target.value)
    }
    
    const onOptionChangeCountry = e => {
        setAnswerCountry(e.target.value)
    }
    
    const onOptionChangeContact = e => {
        setAnswerContact(e.target.value)
    }
    
    const onOptionChangeEmail = e => {
        setAnswerEmail(e.target.value)
    }
    
    const onOptionChangeDate = e => {
        setAnswerDate(e.target.value)
    }
    
    const HandleSubmit =async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/"
    }
  
  return (
    <>
      <Head>
        <title>UMJ feedback</title>
        <meta name="description" content="Test with UMJ, March 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://kia-z.github.io/umj_besuchkartenfavicon.ico" />
      </Head>
      <main>
        <Container>
          <Row>
          <Col>
          <p>
            {date}-{month}-{year}
          </p>
        <Button href='https://kia-z.github.io/umj_besuchkartenenglish'>English</Button>
          </Col>
          <Col>
          <Image
                src="https://kia-z.github.io/umj_besuchkartenoverviewUMJ.jpg"
                alt="UMJ image"
                width={200}
                height={200}
              />
          </Col>
          </Row>
        </Container>
        
   <Container>
    <h1>Was sagen Sie dazu?</h1>
   <Form onSubmit={HandleSubmit}>

    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
            Liebe Besucherin, lieber Besucher! Lob und Kritik, Wünsche oder Anregungen - wir interessieren uns dafür, wie Sie Ihren Museumsbesuch erlebt haben.
            Ihr Feedback hilft dabei, unser Angebot ständig zu verbessern.
        </Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="My feedback" onChange={onOptionChangeComment}/>
    </Form.Group>

    <div className="mb-3 mt-5">
    <Form.Select aria-label="Default select example" onChange={onOptionChangeStatus}>
      <option>Sind Sie ...?</option>
      <option value="1">...Schüler/in</option>
      <option value="2">...Studierende/r</option>
      <option value="3">...Erwachsene/r</option>
      <option value="3">...Seniorin/Senior</option>
    </Form.Select>
    </div>

    <div className="mb-3 mt-5">
        <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="name" placeholder="Your name" onChange={onOptionChangeName}/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Wohnort:</Form.Label>
                <Form.Control type="name" placeholder="Land" onChange={onOptionChangeCountry} />
            </Form.Group>
            </Col>
        </Row>
    </div>

    <div className="mb-3 mt-5">
    <Form.Check
            inline
            label="Ja, ich möchte eine Antwort auf mein Feedback erhalten."
            type='checkbox'
            onChange={onOptionChangeContact}
          />
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>E-mail:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={onOptionChangeEmail}/>
    </Form.Group>
    </div>

    <div className="mb-3 mt-5">
    <Form.Label>Datum:</Form.Label>
    <Form.Control type="date" placeholder="today's date" onChange={onOptionChangeDate}/>
    </div>

        <div className="mt-5">
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>

<h1>Danke für Ihre Zeit!</h1>

    </Container>
    <Container>
        <p>
            Kontakt: feedback@museum-joanneum.at
        </p></Container>
      </main>
    </>
  )
}
