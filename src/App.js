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
import RequireAuth from "./components/RequireAuth/RequireAuth";
import NotFound from "./components/Page/NotFound/NotFound";
import AddBook from "./components/Page/AddBook/AddBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyItems from "./components/Page/MyItems/MyItems";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route
          path="manage"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        />
        <Route path="add" element={<AddBook />} />
        <Route path="myItems" element={<MyItems />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="inventory/:id"
          element={
            <RequireAuth>
              <ItemDetails />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
