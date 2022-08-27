
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
  <footer style={{
        width:"100%",
        height:"800px",
        position:"relative",
        bottom: 0,
        display:"flex",
        justifyContent:"center"
  }} >
     
     <Container  style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Row>
            <Col className='text-center py-3' >
                Copyright &copy; User
            </Col>
        </Row>
     </Container>

  </footer>
  )
}

export default Footer