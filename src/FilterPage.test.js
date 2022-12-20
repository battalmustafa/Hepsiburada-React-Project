import { render,screen } from "@testing-library/react";
import FilterPage from "./components/FilterPage";
test('initial test',() =>{
    render(<FilterPage/>)

    var itemsElem = screen.getByTestId('item');
    expect(itemsElem).toBeInTheDocument();


} )