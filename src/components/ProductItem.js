import classes from './ProductItem.module.css';
import { useContext } from 'react';
import SepetimContext from '../store/Sepetim-context';
function ProductItem(props) {
   const sepetimCtx = useContext(SepetimContext);

   const itemIsSepetim = sepetimCtx.itemIsSepetim(props.id);

    function toggleSepetimStatusHandler() {
if (itemIsSepetim) {
    sepetimCtx.removeSepetim(props.productId)
} else {
    sepetimCtx.addSepetim({
        id: props.id,
        title: props.title,
        image: props.image,
        brand: props.brand,
        color: props.color,
        firstPrice: props.price,
        discountedPrice: props.discountedPrice,



    });
}

    }
    return (

<li className={classes.item}>
    
           
        <div className={classes.image}>
         <img src={props.image} alt={props.id} />
    </div>
        
    <div className={classes.content}>
        <p>{props.title}</p>
    </div>
    
    <div className={classes.specs}>
      <span><b>Marka: </b>{props.brand}</span>
      </div>
      <div className={classes.specs}>
     <span><b>Renk:</b> {props.color}</span>
    </div>
   <div className={classes.price}>
   <span> {props.price} TL</span>
   </div>
   <div className={classes.price}>
   <span className={classes.s}> {props.discountedPrice} TL</span>
</div>
   <div className={classes.item}>  
   
   <button onClick={toggleSepetimStatusHandler} className={classes.button}>{itemIsSepetim ? 'Sepete Eklediniz' : 'Sepete Ekle'  }</button>
  
</div>
</li> 


    );
}

export default ProductItem;