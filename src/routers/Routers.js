import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import BookingForm from "../pages/Form/BookingForm";
import MultiForm from "../pages/Form/MultiForm";
import SuccessConfirm from "../pages/SuccessConfirm";
// import BookingForm from "../components/UI/BookingForm";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/booking" element={<BookingForm />} />
      <Route path="/multiform" element={<MultiForm />} />

      <Route path="/sucess" element={<SuccessConfirm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
