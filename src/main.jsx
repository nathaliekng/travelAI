import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CreateTrip from './create-trip/index.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/custom/Header.jsx'

const router = createBrowserRouter([
{
  path:'/',
  element:<App/>
},
{
  path:'/create-trip',
  element:<CreateTrip/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  <RouterProvider router={router}/>
  </StrictMode>,
)
