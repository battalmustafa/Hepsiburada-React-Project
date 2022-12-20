import { render,screen } from "@testing-library/react";
import Sepetim from "./components/Sepetim";
test('initial test',() =>{
    render(<Sepetim/>)
screen.debug();
    /*var itemsElem = screen.getByTestId('item');
    expect(itemsElem).toBeInTheDocument();

*/
} )