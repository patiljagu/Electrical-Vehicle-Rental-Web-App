import React, { useEffect, useState } from 'react'
import './AllVehicle.css'
import { Card,  Container, Col, Row } from "react-bootstrap"
import axios from 'axios'

function AllVehicle() {

  const [vehicleData, setvehicleData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/AllVehicle")
      .then((result) => {
        console.log(result.data)
        setvehicleData(result.data)
      }).catch((err) => {
        console.log(err)
      });
  }, [])


  return (
    <div>
      <Container className='AllVehicle_Container'>
        <h5>All vehicles</h5>
        <Row>
          {
            vehicleData.map((vehicle) => {
              return (
                <Col sm={12} md={4} lg={3}>
                  <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src={"http://localhost:5000".concat(vehicle.Image)} className='Vehicle_Image' />
                    <Card.Body>
                      <Card.Title>Company : {vehicle.Company}</Card.Title>
                      <Card.Title>Model : {vehicle.Model}</Card.Title>
                      <Card.Title>Rent : {vehicle.Rent}</Card.Title>
                      <Card.Title>Name: {vehicle.Name}</Card.Title>
                      <Card.Footer className='Card_Footer'>
                        <button className='button-46'>Edit</button>
                        <button className='button-45'>Delete</button>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>

    </div>
  )
}

export default AllVehicle