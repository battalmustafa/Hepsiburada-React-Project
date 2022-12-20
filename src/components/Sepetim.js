import { useContext } from "react";
import SepetimContext from "../store/Sepetim-context";
import classes from './Sepetim.module.css'
import {useState} from 'react'
import Modal from "./Modal";

function Sepetim(props){
const sepetimCtx = useContext(SepetimContext);
const sepet = sepetimCtx.sepetim;

const [open,setOpen] = useState(false);
const handleOpen = () => {
    setOpen(!open);  

};
const [modalIsOpen,setModalIsOpen] = useState(false);  

function deleteHandler(){
    setModalIsOpen(true);
};
function closeModalHandler(){
    setModalIsOpen(false);
};

/*console.log(sepetimCtx.sepetim);*/

    return(
 
    <div>
        
            <div className={classes.sepetimButton}>
                <div className={classes.actions}>
                    <button onClick={handleOpen}>Sepetim</button>
                    {open ? (
        
        <ul className={classes.menu}>
            <div className={classes.rect}></div>
          <ul><div className={classes.list}>
            
                {sepet.map((item) =>
                <div key={item.id} className={classes.cart_item}>
                <span className={classes.cart_text}>{item.title}</span>
                <img className={classes.image} src={item.image} alt={item.title} />
                <div className={classes.delete}>
                    <button onClick={deleteHandler}>kaldır</button>
                    {modalIsOpen && <Modal onCancel= {closeModalHandler}/>}
                </div>
                </div>
                )}
                </div>
                
          </ul>
        </ul>
      ) : null}
      
    </div>
    </div>
            <span className={classes.badge}>{sepetimCtx.totalSepetim}</span>
            </div>
    );
}export default Sepetim;