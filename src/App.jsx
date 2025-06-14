import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import Layout from './Layouts/Layout.jsx';
import Home from './pages/Home.jsx'
import InventoryTeam from './pages/InventoryTeam.jsx'
import PackageTeam from './pages/PackageTeam.jsx';
function App() {
  const home = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/package' element={<PackageTeam />} />
      <Route path='/inventory' element={<InventoryTeam />} />
    </Route>
  ))
  return (
    <>
    <RouterProvider router={home}></RouterProvider>
     
    </>
  )
}

export default App
