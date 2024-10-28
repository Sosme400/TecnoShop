import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountSelectionPage from "./PaginaMicro/AccountSelectionPage";
import LoginMicro from "./PaginaMicro/LoginMicro";
import RegisterMicro from "./PaginaMicro/RegisterMicro";
import AdminDashboard from "./PaginaMicroAdmin/AdminDashboard";
import ProductsTable from "./PaginaMicroAdmin/components/ProductsTable";
import InventoryTable from "./PaginaMicroAdmin/components/InventoryTable";
import PurchasesManager from "./PaginaMicroAdmin/components/PurchasesManager";
import StoreInfo from "./PaginaMicroAdmin/components/StoreInfo";
import CategoryManager from "./PaginaMicroAdmin/components/CategoryManager";
import OrdersTable from "./PaginaMicroAdmin/components/OrdersTable";
import StorePreview from "./PaginaMicroAdmin/components/StorePreview"; // Ruta corregida

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountSelectionPage />} />
        <Route path="/login" element={<LoginMicro />} />
        <Route path="/register-vendor" element={<RegisterMicro />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<ProductsTable />} />
        <Route path="/admin/inventory" element={<InventoryTable />} />
        <Route path="/admin/purchases" element={<PurchasesManager />} />
        <Route path="/admin/store" element={<StoreInfo />} />
        <Route path="/admin/categories" element={<CategoryManager />} />
        <Route path="/admin/orders" element={<OrdersTable />} />
        <Route path="/store-preview" element={<StorePreview />} /> {/* Vista previa de la tienda */}
      </Routes>
    </Router>
  );
}

export default App;
