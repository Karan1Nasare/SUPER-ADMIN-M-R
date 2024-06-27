import React, { Suspense } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { Toaster } from 'react-hot-toast';

import themeList from './theme';
import AppRouter from './App.routes';
import { ContextStoreProvider } from './store/context-store'; 
function App() {
  return (
    <div className='App'>
      <ContextStoreProvider>
        <ThemeProvider theme={themeList[0]}>
          <Suspense fallback={<div>Loading...</div>}>
            <AppRouter />
            <Toaster />
          </Suspense>
        </ThemeProvider>
      </ContextStoreProvider>
    </div>
  );
}

export default App;
