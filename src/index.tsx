import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient,QueryClientProvider} from 'react-query'
import QuoteContextProvider from './contexts/quoteContext';
import './index.css';
import App from './App';

const element = document.getElementById('root');
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(element!);
root.render(
  <QuoteContextProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </QuoteContextProvider>
);
