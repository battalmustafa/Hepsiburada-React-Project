import React from 'react';
import ReactDOM from 'react-dom';
import {act, render, fireEvent, cleanup, getByTestId, getByAltText, findAllByText} from '@testing-library/react';
import App from './App';

import { SepetimContextProvider } from './store/Sepetim-context.js';
import Sepetim from './components/Sepetim.js';

afterEach(cleanup)

it('Context value is updated by child component', () => {

   const { container, getByText } = render(
    
                                           <SepetimContextProvider>
                                            <App>
                                             <Sepetim />
                                             </App>
                                             </SepetimContextProvider>
                                           );
/*
   expect(findAllByText(/p1/i).textContent).toBe("p1")

   fireEvent.click(getByText("Change Text"))
*/
})
