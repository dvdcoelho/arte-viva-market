
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import SellerProfile from "./pages/SellerProfile";
import SellerDashboard from "./pages/SellerDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import OrderKanban from "./pages/OrderKanban";
import CustomerProfile from "./pages/CustomerProfile";
import NotFound from "./pages/NotFound";
import ProductRegistration from "./pages/ProductRegistration";

// Create a new QueryClient instance for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/register/:userType" element={<Register />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/seller/:id" element={<SellerProfile />} />
              <Route path="/dashboard" element={<SellerDashboard />} />
              <Route path="/customer/dashboard" element={<CustomerDashboard />} />
              <Route path="/customer/profile" element={<CustomerProfile />} />
              <Route path="/seller/orders" element={<OrderKanban />} />
              <Route path="/seller/products/new" element={<ProductRegistration />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  </QueryClientProvider>
);

export default App;
