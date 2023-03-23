import React from 'react';
import Choose from './choose';
import Compare from './compare';
import PopUp from './details';
import MuiAccordion from './select1'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { stores } from './store';
import Trail from './trail'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/choose' element={<Choose/>}></Route>
            <Route path='/' element={<Compare/>}></Route>
            <Route path='/details' element={<PopUp/>}></Route>
            <Route path='/select' element={<MuiAccordion/>}></Route>
            <Route path='/trail' element={<Trail/>}></Route>
        </Routes>
    </BrowserRouter>
    
  )
}

const Main = () =>{
  return(
    <Provider store={stores}>
      <Routing/>
    </Provider>
  )
}

export default Main