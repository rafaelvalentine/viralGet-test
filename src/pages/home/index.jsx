import React, { Component } from 'react'
import { HTTP } from '../../api'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from '../../components/cards'
export default class index extends Component {

  state = {
    articles:[]
  }
  componentDidMount () {
    const newApi = HTTP().newsApi()
    newApi.get('/?country=us&category=business')
            .then((result) => {
              const data = result.data
              this.setState({articles:data.articles})
              console.log(data)
            }).catch((err) => {
              console.log('err :>> ', err);
            });
            // console.log('process.env.newAPI_key :>> ', process.env.REACT_APP_newAPI_key);
  }

  render () {
    const articles = this.state.articles.map(article=>(
      <Col key={Math.random()} xs={12} md={6} lg={4}>
        <Card  {...article}/>
      </Col>
    ))
    return (
      <Container>
        <Row className='justify-content-start'>
          {articles}
        </Row>
      </Container>
    )
  }
}
