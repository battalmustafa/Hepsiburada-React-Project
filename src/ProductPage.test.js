import { render,screen } from "@testing-library/react";
import ProductPage from "./components/ProductPage";
test('initial test',() =>{
    render(<ProductPage/>)
screen.debug();
    /*var itemsElem = screen.getByTestId('item');
    expect(itemsElem).toBeInTheDocument();

*/
} )