import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Layout/Header/Header";
import Home from "./components/Page/Home/Home";
import Footer from "./components/Layout/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ItemDetails from "./components/Page/ItemDetails/ItemDetails";
import Blog from "./components/Page/Blog/Blog";
import ManageInventory from "./components/Page/ManageInventory/ManageInventory";
import Login from "./components/Page/Login/Login";
import Signup from "./components/Page/Signup/Signup";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="manage-inventory" element={<ManageInventory />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="inventory/:id" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
