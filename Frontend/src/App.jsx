import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProctectedRoute from "./Components/ProctectedRoute";
import { Whishlist } from "./Components/Whishlist";
import LoginProvider from './context/LoginContext';
import ProductProvider from "./context/ProductContext";
import Adding from "./pages/Adding";
import MainHome from "./pages/MainHome";

function App() {
  return (
    <BrowserRouter>  
      <LoginProvider>
       <ProductProvider> 
       <ToastContainer theme="dark" />
        <Routes>
          <Route path="/" element={<MainHome/>} />
          <Route path="/add" element={<ProctectedRoute> <Adding/></ProctectedRoute>} />
          <Route path="/whishlist" element={<ProctectedRoute> <Whishlist/></ProctectedRoute>}/>
        </Routes>
        </ProductProvider>
      </LoginProvider> 
    </BrowserRouter>
  );
}

export default App;
