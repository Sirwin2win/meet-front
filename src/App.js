import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms"
import HotelInfo from "./pages/HotelInfo"
import Offers from "./pages/Offers"
import Gallery from "./pages/Gallery"
import Location from "./pages/Location"
import Dining from "./pages/Dining"
import Events from "./pages/Events"
import Register from "./pages/Register";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage"
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Dashboard from "./pages/Dashboard";
import CreateRoom from "./pages/CreateRoom";
import ProductDetail from "./pages/ProductDetail";
import Order from "./pages/Order";
import ManageProduct from "./pages/ManageProduct";



function App() {
  return (
    <div className="App">
  <Header />
  <hr />  
    <Routes>
        <Route index element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/hotel-info" element={<HotelInfo />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/location" element={<Location />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/manage-product" element={<ManageProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NoPage />} />
      
    </Routes>
<Footer />
  </div>
  );
}

export default App;
