import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default props => {
  const date = props.publishedAt ? new Date(props.publishedAt) : new Date()
  return (
    <Card className='m-3'style={{}}>
      <Card.Img variant='top' src={props.urlToImage || require('../../theme/images/image-placeholder.png')} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{props.author || 'Anonymous'}</Card.Subtitle>
        <Card.Text>
          {props.description || 'no description at this time please click below to view full story'}
        </Card.Text>
        <Card.Subtitle className='mb-2 text-muted'>Published: {date.toLocaleDateString()}</Card.Subtitle>

        <Card.Link href={`${props.url}`}>
          <Button variant='info'>News Link</Button>
        </Card.Link>
        {/* <Card.Link href='#'>Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  )
}
