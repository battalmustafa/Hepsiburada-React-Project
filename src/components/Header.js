import { useState,useEffect,useContext } from 'react';
import classes from './Header.module.css';
import ProductPage from './ProductPage';
import Sepetim from './Sepetim.js';
import SepetimContext from '../store/Sepetim-context';
function Header(props) {
    const [query, setQuery] = useState("");
    
    const sepetimCtx = useContext(SepetimContext);
    
   
   
        

/*getting from localStorage*/
    const [items, setItems] = useState([]);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
         setItems(items);
        }
      }, []);
 
 
sepetimCtx.sendQuery(query);
   
const [open,setOpen] = useState(false);
const handleOpen = () => {
    setOpen(!open);
    
};

      
    return (
      <><header className={classes.header}>
            <div className={classes.logo}>
                <img className={classes.logoimg} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/282px-Hepsiburada_logo_official.svg.png'/>
            </div>
            <div className={classes.searchWrapper}>
                <span></span>
                <input type="text" 
                className={classes.search}
                 placeholder="25 milyon’dan fazla ürün içerisinde ara" 
                onChange={(e) => setQuery(e.target.value)} 
                 />
<ul className='list'>
</ul>
            </div>
            <Sepetim/>
           
            
        </header>
        <div className={classes.subHeader}>
            <div className={classes.subHeadertitle1}>
            <span>iPhone iOS cep telefonu</span>
            </div>
            <div className={classes.subHeadertitle2}>
            <span>Aranan Kelime: <b>{query}</b></span>
            </div>
            </div>
            <div className={classes.selectBox}>
        <div className={classes.actions}>
                <button onClick={handleOpen}>Sıralama</button>{open ? (
                
                
                 <div>   
            <div className={classes.box}>
             <li><a href='#'>En Düşük Fiyat</a></li>
             <li><a href='#'>En Yüksek Fiyat</a> </li>
             <li><a href='#'>En Yeniler {'(A>Z)'}</a> </li>
             <li><a href='#'>En Yeniler {'(Z>A)'}</a> </li>

           
           </div>
                </div>
                
          
                ) :null

                }
            </div>
            </div></>
    );
  }
  
  export default Header;