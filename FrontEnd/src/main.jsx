import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router-dom";
import router from './routes/Routes';
import AuthProvider from './provider/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <AuthProvider>
      <div className=''>
        <RouterProvider router={router} />
      </div>
      
    </AuthProvider>
    </QueryClientProvider>
    
  </React.StrictMode>,
)
