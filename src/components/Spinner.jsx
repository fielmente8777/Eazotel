import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ThreeCircles } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <Container fluid className=" d-flex align-items-center justify-content-center">
      <Row>
        <Col className="d-flex justify-content-center">
         
          <ThreeCircles
              height="100"
              width="100"
              color="#4fa94d"
              className="d-flex justify-content-center align-content-center"
              wrapperStyle={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(255, 255, 255, 0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 999,
              }}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor="orangered"
              innerCircleColor="blue"
              middleCircleColor="orange"
            />
        </Col>
      </Row>
    </Container>

  )
}

export default Spinner
