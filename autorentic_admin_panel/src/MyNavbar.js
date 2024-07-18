import { useState } from 'react'
import './MyNavbar.css'
import { Image, Navbar, NavDropdown, Offcanvas, Accordion } from 'react-bootstrap'
import { AiOutlineMenuUnfold, AiFillSetting, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineAddShoppingCart, MdAcUnit } from 'react-icons/md';
import { FaHome, FaArchive } from 'react-icons/fa';
import { HiMenuAlt1, HiArrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'



function MyNavbar() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Navbar className='MNav' >

                <Navbar.Brand className='brandname' onClick={handleShow}><HiMenuAlt1 size={30} /> Autorentic Admin </Navbar.Brand>
                <Offcanvas show={show} onHide={handleClose} className='Offcanvas'>

                    <Offcanvas.Body>
                        <div className='OffCanvas_Header'>
                            <h6><HiArrowLeft onClick={handleClose} size={25} color='white' />&nbsp;&nbsp;Control Panal</h6>

                        </div>
                        <div className='Main'>
                            <Link to="/" onClick={handleClose} className="Offlink"><FaHome size={30} /> Dashboard </Link>
                            <Link to="/addvehicle" onClick={handleClose} className="Offlink"><MdOutlineAddShoppingCart size={30} /> Add Vehicle</Link>
                            <Link to="/allvehicle" onClick={handleClose} className="Offlink"><FaArchive size={30} /> All Vehicle</Link>
                            <Link to="/booking" onClick={handleClose} className="Offlink"><AiOutlineShoppingCart size={30} />Booking</Link>
                            <Link to="/customerlist" onClick={handleClose} className="Offlink"><AiFillSetting size={30} /> Customer List</Link>

                        </div>
                        
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </div>
    )
}

export default MyNavbar