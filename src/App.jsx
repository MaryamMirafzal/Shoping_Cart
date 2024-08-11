import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./Pages/ProductsPage"
import DetailsPage from "./Pages/DetailsPage"
import CheckoutPage from "./Pages/CheckoutPage"
import NotFound from "./Pages/NotFound"
import ProductProvider from "./Context/ProductContext"
import CartProvider from "./Context/CartContext"

function App() {
  return (
    <>
    <CartProvider>
     <ProductProvider>
      <Routes>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
     </ProductProvider>
     </CartProvider>
    </>
  )
}

export default App
