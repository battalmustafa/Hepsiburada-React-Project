import classes from './FilterPage.module.css';
import { useState, useEffect, useContext} from "react";


function FilterPage (props){
    const [items, setItems] = useState([]);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
         setItems(items);
        }
      }, []);
      const [filter, setFilter] = useState("");
    
     /* const sepetimCtx = useContext(SepetimContext);
      function filterf(data) {

        sepetimCtx.sendFilter(data);

      }*/



const colors = [...new Set(items.map((Val) => Val.color))];


const brands = [...new Set(items.map((Val) => Val.brand))];


  


    return( 
        <div className={classes.SidebarWrapper}>
            
            <label><h1>Renk</h1></label>
            
         
        { colors.map((item) =>
    <li key = {item.id} className={classes.color}>
        <li><a onClick={() => item.color
  } href='!#' className='page-link'>
              {(item)}() </a></li>




            </li>
           
            )}


      
           <label><h1>Sıralama</h1></label>
           <div className={classes.order}>
             <li><a href='#'>En Düşük Fiyat</a></li>
             <li><a href='#'>En Yüksek Fiyat</a> </li>
             <li><a href='#'>En Yeniler {'(A>Z)'}</a> </li>
             <li><a href='#'>En Yeniler {'(Z>A)'}</a> </li>

           
           </div>
           <div data-testid="item" >
           <label><h1>Marka</h1></label>
           <div key= {items.id} className={classes.order}>
           { brands.map((item) =>
    <li key = {item.id} className={classes.color}>
        <li><a onClick={() => item  } href='!#' className='page-link'>
              {(item)}() </a></li>




            </li>
           
            )}
</div>
           </div>
           </div>
    );
}
export default FilterPage;