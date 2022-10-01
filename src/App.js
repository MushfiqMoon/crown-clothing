import { Route, Routes } from "react-router-dom";
import Diroctory from "./components/diroctory/Diroctory";
import Shop from "./components/shop/Shop";
import Navbar from "./routes/Navbar";

function App() {




  return (
    <div className="container">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Diroctory />}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
