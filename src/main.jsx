import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import MasterStudent from './pages/MasterStudent'
import Dashboard from './pages/Dashboard'
import InputStudent from './pages/InputStudent'
import { Toaster } from './components/ui/toaster'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <BrowserRouter>
        <Routes>
          <Route path="auth">
            <Route element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
            </Route>
          </Route>

          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/input-student" element={<InputStudent />} />
            <Route path="master">
              <Route path="student" element={<MasterStudent />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </App>
  </StrictMode>,
)
