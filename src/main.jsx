import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { About } from './Pages/About.jsx'
import { Admin } from './Pages/Admin/Admin.jsx'
import { Bev } from './Pages/Bev.jsx'
import { Booking } from './Pages/Booking.jsx'
import { BookingSuc } from './Pages/BookingSuc.jsx'
import { Breakfast } from './Pages/Breakfast.jsx'
import { Chiefs } from './Pages/Chiefs.jsx'
import { Contact } from './Pages/Contact.jsx'
import { Dinner } from './Pages/Dinner.jsx'
import { Events } from './Pages/Events.jsx'
import { Feedback } from './Pages/Feedback.jsx'
import { Gallery } from './Pages/Gallery.jsx'
import { Home } from './Pages/Home.jsx'
import { Lunch } from './Pages/Lunch.jsx'
const router=createBrowserRouter([
{
  path:'/',
  element:<Home/>,
},

{
  path:'/Booking',
  element:<Booking/>,
},{
  path:'/feedback',
  element:<Feedback/>,
},
{
  path:'/about',
  element:<About/>,
},
{
  path:'/events',
  element:<Events/>,

},
{
 path:'/gallery',
  element:<Gallery/>,
},
{
  path:'/chiefs',
  element:<Chiefs/>,
},
{
  path:'/contact',
  element:<Contact/>,
},{
  path:'admin',
  element:<Admin/>,
},{
  path:'/dinner',
  element:<Dinner/>,

},
{
  path:'/breakfast',
  element:<Breakfast/>,
},
{
  path:'/Lunch',
  element:<Lunch/>,
},
{
  path:'/beverages',
  element:<Bev/>,
},
{
  path:'/bookingsuccess',
  element:<BookingSuc/>,

}

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
