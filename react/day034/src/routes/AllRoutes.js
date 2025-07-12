import { Route, Routes } from "react-router-dom";
import { HomePage, ProductsList, ProductDetail } from "../pages/";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </>
  );
};
