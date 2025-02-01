import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import ErrorPage from './ErrorPage.jsx'
import Form from './components/Form.jsx'
import FormDetails from './components/FormDetails.jsx'
import Layout from './Layout.jsx'
import { FormProvider } from './context/formContext.jsx'
import SingleUserDetails from './components/SingleUserDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<ErrorPage/>} element={<Layout/>} >
      <Route path='' element={<HomePage/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/show' element={<FormDetails/>}/>
      <Route path='/:id' element={<SingleUserDetails/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormProvider>
      <RouterProvider router={router}/>
    </FormProvider>
  </StrictMode>,
)
