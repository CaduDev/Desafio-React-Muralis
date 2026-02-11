import { } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Routes } from '@/router/index.route';

import { DialogProvider } from '@core/Dialog';

import { AuthProvider } from './context/Auth';

import { AppThemeProvider } from './context/Theme';

function App() {

  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <DialogProvider>
            <Routes />
          </DialogProvider>
        </AuthProvider>
      </BrowserRouter>
    </AppThemeProvider>
  )
}

export default App
