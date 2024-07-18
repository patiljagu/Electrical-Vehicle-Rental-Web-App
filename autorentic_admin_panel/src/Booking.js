import React, { useEffect, useState } from 'react'
import './Booking.css'
import { Card, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'



function Booking() {

  const [BookingData, setBookingData] = useState([])
  const [VehicleData, setVehicleData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/AllBooking")
      .then((result) => {
        console.log(result.data)
        setBookingData(result.data)

      }).catch((err) => {
        console.log(err)

      });

  }, [])

  useEffect(() => {
    axios.get("http://localhost:5000/AllVehicle")
      .then((result) => {
        console.log(result.data)
        setVehicleData(result.data)

      }).catch((err) => {
        console.log(err)

      });

  }, [])



  return (


    <div>
      <Container className='Booking-container'>
        <h1>All Booking</h1>
        <Row>
          {
            BookingData.map((Booking) => {
              return (
                <Col sm={12} md={6} lg={3}>
                  <Card className='BookingCard'>
                    <Card.Body>
                      <div>
                        <h6><span>Name :</span> {Booking.CustomerName}</h6>
                        <h6><span>Mobile :</span>{Booking.CustomerMobile}</h6>
                        <h6><span>Address :</span>{Booking.CustomerAddress}</h6>
                        <h6><span>Vehicle :</span>{Booking.VehicleId.Company}</h6>
                        <h6><span>Booking Date :</span>{Booking.BookingDate}</h6>
                        <h6><span>From Date :</span> {Booking.FromDate}</h6>
                        <h6><span>To Date :</span>{Booking.ToDate}</h6>
                      </div>

                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }


          {
            VehicleData.map((Vehicle) => {
              return (
                <Col sm={12} md={6} lg={3}>
                  <Card className='VehicleCard'>
                    <Card.Body>
                      <div>
                        <h6>Client Name:{Vehicle.Name}</h6>
                        <h6>Company:{Vehicle.Company}</h6>
                        <h6>Model :{Vehicle.Model}</h6>
                        <h6>Rent : {Vehicle.Rent}</h6>

                      </div>

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

export default Booking