// import React, { useState } from 'react'
// import './AddVehicle.css'
// import { Form, Button } from "react-bootstrap"
// import axios from 'axios'


// function AddVehicle() {
//     const [VehicleModel, setVehicleModel] = useState("")
//     const [VehicleCompany, setVehicleCompany] = useState("")
//     const [VehicleImage, setVehicleImage] = useState("")
//     const [VehicleRent, setVehicleRent] = useState("")


//     async function handleUploadImage(e) {
//         const imageData = new FormData()
//         imageData.append("image", e.target.files[0]
//         );

//         axios.post("http://localhost:5000/uploadimages", imageData)
//             .then((result) => {
//                 console.log(result.data)
//                 setVehicleImage(result.data.filepath)
//             }).catch((err) => {
//                 console.log("Error", err)
//             });
//     }


//     function AddVehicle() {
//         const vehicaleData = {
//             Model: VehicleModel,
//             Rent: VehicleRent,
//             Company: VehicleCompany,
//             Image: VehicleImage
//         }
//         axios.post("http://localhost:5000/AddVehicle", vehicaleData)

//         .then((result) => {
//             console.log(result.data)

//         }).catch((err) => {

//         });

//     }
//     return (
//         <div className='Vehiclediv'>
//             <div >

//                 <Form onSubmit={AddVehicle} className='Forma'>
//                     <Form.Group className='Form-main'>
//                         <Form.Label>Select Brand</Form.Label>
//                         <Form.Select placeholder="Model"
//                             onChange={(e) => setVehicleCompany(e.target.value)}>
//                             <option>Select Brand</option>
//                             <option value="Suzuki">Suzuki</option>
//                             <option value="Kia">Kia</option>
//                             <option value="Nissan">Nissan</option>
//                             <option value="Toyota">Toyota</option>
//                             <option value="Ford">Ford</option>
//                             <option value="Hyundai">Hyundai</option>
//                             <option value="Honda" >Honda</option>
//                             <option value="Dodge">Dodge</option>
//                             <option value="Volkswagen">Volkswagen</option>
//                             <option value="Mazda">Mazda</option>


//                         </Form.Select>
//                     </Form.Group>

//                     <Form.Group className='Form-main' >
//                         <Form.Label>Select Model</Form.Label>
//                         <Form.Control type="Text" placeholder="Model"
//                             onChange={(e) => setVehicleModel(e.target.value)} />
//                     </Form.Group>

//                     <Form.Group className='Form-main' >
//                         <Form.Label> Vehicle Rent</Form.Label>
//                         <Form.Control type="Text" placeholder="Vehicle Rent"
//                             onChange={(e) => setVehicleRent(e.target.value)} />
//                     </Form.Group>

//                     <Form.Group className='Form-main' >
//                         <Form.Label>Car Image</Form.Label>
//                         <Form.Control type="File" placeholder="Car Image"
//                             onChange={handleUploadImage} />
//                     </Form.Group>
//                     <Button type='submit'>Submit</Button>

//                 </Form>
//             </div>
//         </div>
//     )
// }

// export default AddVehicle


import React, { useState } from 'react'
import { Container, Row, Col, Image, Form} from 'react-bootstrap'
import './AddVehicle.css'
import axios from 'axios'



function AddVehicle() {

    const [VehicleModel, setVehicleModel] = useState("")
    const [VehicleCompany, setVehicleCompany] = useState("")
    const [VehicleImage, setVehicleImage] = useState("")
    const [VehicleRent, setVehicleRent] = useState("")
    const [ClientName , setClientName] = useState("")


    async function handleUploadImage(e) {
        const imageData = new FormData()
        imageData.append("image", e.target.files[0]);

        axios.post("http://localhost:5000/uploadimages", imageData)
            .then((result) => {
                console.log(result.data)
                setVehicleImage(result.data.filepath)
            }).catch((err) => {
                console.log("Error", err)
            });
    }


    function AddVehicle() {
        const vehicaleData = {
            Name: ClientName ,
            Model: VehicleModel,
            Rent: VehicleRent,
            Company: VehicleCompany,
            Image: VehicleImage
        }
        axios.post("http://localhost:5000/AddVehicle", vehicaleData)

            .then((result) => {
                console.log(result.data)

            }).catch((err) => {

            });

    }
    return (
        <>
            <Container className='AddVehcile_Container' >
                <Row>
                    <Col sm={12} md={6} lg={6} className='Addvehicle_Col_first'>
                        <h4>Add Vehicles</h4>
                        <h5>Driving the dashboard, controlling the fleet</h5>
                        <Row>
                            <Col>
                                <Image src='https://images.pexels.com/photos/14779980/pexels-photo-14779980.jpeg?auto=compress&cs=tinysrgb&w=600' className='AddVehicle_Logo' />
                            </Col>

                        </Row>
                    </Col>
                    <Col sm={12} md={6} lg={6} className='Addvehicle_Col_Second' >
                        <div className='Form-Div' >
                            <Form onSubmit={AddVehicle}>
                                <Form.Group>
                                    <h2>Select Brand</h2>
                                    <Form.Select placeholder="Model" className='form_Control' onChange={(e) => setVehicleCompany(e.target.value)}>
                                        <option>Select Brand</option>
                                        <option value="Suzuki">Suzuki</option>
                                        <option value="Kia">Kia</option>
                                        <option value="Nissan">Nissan</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="Ford">Ford</option>
                                        <option value="Hyundai">Hyundai</option>
                                        <option value="Honda" >Honda</option>
                                        <option value="Dodge">Dodge</option>
                                        <option value="Volkswagen">Volkswagen</option>
                                        <option value="Mazda">Mazda</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group>
                                    <h2>Client Name</h2>
                                    <Form.Control type="Text" placeholder="Name" className='form_Control' onChange={(e) => setClientName(e.target.value)} />
                                </Form.Group>

                                <Form.Group>
                                    <h2>Model Name</h2>
                                    <Form.Control type="Text" placeholder="Model" className='form_Control' onChange={(e) => setVehicleModel(e.target.value)} />
                                </Form.Group>

                                <Form.Group>
                                    <h2> Vehicle Rent</h2>
                                    <Form.Control type="Text" placeholder="Vehicle Rent" className='form_Control' onChange={(e) => setVehicleRent(e.target.value)} />
                                </Form.Group>

                                <Form.Group>
                                    <h2>Car Image</h2>
                                    <Form.Control type="File" placeholder="Car Image" className='form_Control' onChange={handleUploadImage} />
                                </Form.Group>
                                <button type='submit' className='button-28'>Submit</button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddVehicle