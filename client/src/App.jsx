import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BillPage from "./pages/BillPage";
import CustomerPage from "./pages/CustomerPage";


import CartPage from "./pages/CartPage";
import StatisticPage from "./pages/StatisticPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProductPage from "./pages/ProductPage";


   function App() {
    return (
      <BrowserRouter >
        <Routes>
        <Route
          path="/"
          element={
            <RouteControl>
              <HomePage />
            </RouteControl>
          }
        />
        <Route
          path="/cart"
          element={
            <RouteControl>
              <CartPage />
            </RouteControl>
          }
        />
        <Route
          path="/bills"
          element={
            <RouteControl>
              <BillPage />
            </RouteControl>
          }
        />
        <Route
          path="/customers"
          element={
            <RouteControl>
              <CustomerPage />
            </RouteControl>
          }
        />
        <Route
          path="/statistic"
          element={
            <RouteControl>
              <StatisticPage />
            </RouteControl>
          }
        />
        <Route
          path="/products"
          element={
            <RouteControl>
              <ProductPage />
            </RouteControl>
          }
        />
          <Route path="/" element= {<HomePage />} /> 
          <Route path="/cart" element= {<CartPage />} /> 
          <Route path="/bills" element= {<BillPage />} /> 
          <Route path="/customer" element= {<CustomerPage />} /> 
          <Route path="/products" element= {<ProductPage />} /> 
          <Route path="/statistic" element= {<StatisticPage />} /> 
          <Route path="/register" element= {<Register />} /> 
          <Route path="/login" element= {<Login />} /> 
        </Routes>
      </BrowserRouter>
    );
  }

export default App

export const RouteControl = ({ children }) => {
  if (localStorage.getItem("posUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};