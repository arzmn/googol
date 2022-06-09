import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { Results } from './Results';

export const Layer = () => {

  return (
    <div className='p-4'>
    <Routes>
        <Route exact path="/">
          
        </Route>
        <Route path='/search' element={<Results />}>
            
        </Route>
    </Routes>
    </div>
  )
}


