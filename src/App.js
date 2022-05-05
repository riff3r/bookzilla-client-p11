import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Layout/Header/Header";
import Home from "./components/Page/Home/Home";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
