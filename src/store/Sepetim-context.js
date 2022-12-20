import { createContext, useState } from "react";

const SepetimContext = createContext({
    sepetim: [],
    product:[],
    totalSepetim: 0,
    addSepetim: (sepetimProduct) => {},
    removeSepetim: (productId) => {},
    itemIsSepetim: (productId) => {},
    sendQuery: (query) => {},
    sendFilter: (filter) => {},
} );


export function SepetimContextProvider(props) {
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [productSepetim, setproductSepetim] = useState([]);
    
    
    function addSepetimHandler(sepetim) {
  setproductSepetim((prevProductSepetim) => {
    return prevProductSepetim.concat(sepetim);
  });
}

function removeSepetimHandler(productId) {
    setproductSepetim(prevProductSepetim => {
        return prevProductSepetim.filter(product => product.id !== productId );
    })
}

function itemIsSepetimHandler(productId) {
    return productSepetim.some(product => product.id === productId);
}
function sendQueryHandler(data){
   return setQuery(data);
}
function sendFilterHandler(data){
    return setFilter(data);
}
    const context ={
        sepetim: productSepetim,
        totalSepetim: productSepetim.length,
        addSepetim: addSepetimHandler,
        removeSepetim: removeSepetimHandler,
        itemIsSepetim: itemIsSepetimHandler,
        sendQuery: sendQueryHandler,
        sendFilter:sendFilterHandler,
        query,
        filter,
        
       

    };

    return <SepetimContext.Provider value={context}>
        {props.children}
    </SepetimContext.Provider>
}

export default SepetimContext;