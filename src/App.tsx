import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const History = React.lazy(() => import('./pages/History'));
const Values = React.lazy(() => import('./pages/Values'));
const Inventory = React.lazy(() => import('./pages/Inventory'));
const Services = React.lazy(() => import('./pages/Services'));
const ServiceDetails = React.lazy(() => import('./pages/ServiceDetails'));
const BrandInventory = React.lazy(() => import('./pages/BrandInventory'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/values" element={<Values />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:region" element={<Inventory />} />
          <Route path="/inventory/:region/:brand" element={<BrandInventory />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:category" element={<ServiceDetails />} />
        </Routes>
      </Suspense>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}

export default App;