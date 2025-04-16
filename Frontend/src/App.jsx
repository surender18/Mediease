import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Doctors from "./Pages/Doctors";
import MyAppointments from "./Pages/MyAppointments";
import MyProfile from "./Pages/MyProfile";
import Login from "./Pages/Login";
import Appointment from "./Pages/Appointment";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%] ">
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/myappointments" element={<MyAppointments />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/login" element={<Login />} />
      
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
