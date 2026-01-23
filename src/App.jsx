import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './i18n';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white flex items-center justify-center">
      <div className="text-cyan-600 text-lg font-medium">Loading...</div>
    </div>
  );
}

// Layout wrapper for language-prefixed routes
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BrowserRouter>
        <Routes>
          {/* Language-prefixed routes - Single page app */}
          <Route path="/:lang" element={<Layout><Home /></Layout>} />
          <Route path="/:lang/privacy" element={<Layout><Privacy /></Layout>} />
          <Route path="/:lang/terms" element={<Layout><Terms /></Layout>} />
          
          {/* Legacy routes - redirect to home */}
          <Route path="/:lang/about" element={<Navigate to="/:lang" replace />} />
          <Route path="/:lang/contact" element={<Navigate to="/:lang" replace />} />
          
          {/* Direct access routes (without language prefix) */}
          <Route path="/privacy" element={<Navigate to="/en/privacy" replace />} />
          <Route path="/terms" element={<Navigate to="/en/terms" replace />} />
          
          {/* Redirect root to default language */}
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
