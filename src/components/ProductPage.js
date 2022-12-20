import { useState, useEffect,useContext } from "react";
import ProductList from "./ProductList";
import classes from "./ProductPage.module.css";
import Header from './Header.js';
import SepetimContext from '../store/Sepetim-context';
import Pagination from "./Pagination";
import FilterPage from "./FilterPage";

const Dummy_Data = [
{
    id: 'p1',
    title: 'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',
    image: 'https://productimages.hepsiburada.net/s/34/222-222/10447613001778.jpg',
    brand: 'Apple',
    color: 'Siyah',
    price: {
        FirstPrice: '124,00',
        DiscountedPrice: '90,85'
    }

},
{
    id: 'p2',
    title: 'Apple iPhone 11 ',
    image: 'https://productimages.hepsiburada.net/s/49/222-222/10986385932338.jpg',
    brand: 'Apple',
    color: 'Yeşil',
    price: {
        FirstPrice: '124,00',
        DiscountedPrice: '90,85'
    }

},
{
    id: 'p3',
    title: 'Apple iPhone 12 ',
    image: 'https://productimages.hepsiburada.net/s/49/1100/10986385866802.jpg',
    brand: 'Apple',
    color: 'Mor',
    price: {
        FirstPrice: '124,00',
        DiscountedPrice: '90,85'
    }

},
{
    id: 'p4',
    title: 'Samsung s8 ',
    image: 'https://productimages.hepsiburada.net/s/113/550/110000060955062.jpg',
    brand: 'Samsung',
    color: 'Siyah',
    price: {
        FirstPrice: '124,00',
        DiscountedPrice: '90,85'
    }

},
{
    id: 'p5',
    title: 'Nokia ',
    image: 'https://productimages.hepsiburada.net/s/49/222-222/10986385932338.jpg',
    brand: 'Nokia',
    color: 'Beyaz',
    price: {
        FirstPrice: '124,00',
        DiscountedPrice: '90,85'
    }

},
{
    id: 'p6',
    title: 'Apple iPhone 13 pro ',
    image: 'https://productimages.hepsiburada.net/s/49/222-222/10986385932338.jpg',
    brand: 'Apple',
    color: 'Sarı',
    price: {
        FirstPrice: '124,00',
        DiscountedPrice: '90,85'
    }

},
{
    id: 'p7',
    title: 'Apple iPhone 11 max ',
    image: 'https://productimages.hepsiburada.net/s/49/222-222/10986385932338.jpg',
    brand: 'Apple',
    color: 'Kırmızı',
    price: {
        FirstPrice: '124,00',
        DiscountedPrice: '90,85'
    }

},

];



function ProductPage(props) {

   const sepetimCtx = useContext(SepetimContext);

  const query = sepetimCtx.query || '';
  /*  console.log(filter);*/
 
    const [items, setItems] = useState([]);

     

    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(Dummy_Data));
    }, [Dummy_Data]);
    
    
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
         setItems(items);
        }
      }, []);

let data =''
   const search = (query)=> {if(query.length >= 2) return data = query};
    search(query);
    return ( <div> 
                <ProductList products ={items.filter(items=>items.title.toLowerCase().includes(data) )  } />
                </div> 
    );
}
export default ProductPage;