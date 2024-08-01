import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './store.ts'
import { createBrowserRouter } from "react-router-dom";
import { CountryPage } from '../pages/CountryPage'
import { Home } from '../pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/:countryName',
    element: <CountryPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
