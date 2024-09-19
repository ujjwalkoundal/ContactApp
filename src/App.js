

import React from 'react';
import {ToastContainer} from 'react-toastify';
import Navbar from './component/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';

const App = () =>
{
return(
  <div className='App'>
  <ToastContainer/>
  <Navbar/>
  <Routes>
    <Route  path='/' element={<Home/>}></Route>
    <Route  path='/add' element={<AddContact/>}></Route>
    <Route  path='/edit/:id' element={<EditContact/>}></Route>
  </Routes>
 
  </div>
)
}
export default App;