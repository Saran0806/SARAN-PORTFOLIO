import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;


