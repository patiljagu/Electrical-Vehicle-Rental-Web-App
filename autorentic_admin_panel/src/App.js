import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './MyNavbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AddVehicle from "./AddVehicle"
import AllVehicle from "./AllVehicle"
import Dashboard from "./Dashboard"
import Booking from './Booking';


function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addvehicle" element={<AddVehicle />} />
          <Route path="/allvehicle" element={<AllVehicle />} />
          <Route path="/booking" element={<Booking/>} />
        </Routes>
      </Router>
    {/* <AddVehicle/> */}
    {/* <AllVehicle/> */}
    {/* <Booking/> */}
    {/* <Dashboard/> */}

    </div>
  );
}

export default App;
