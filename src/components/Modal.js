import React from "react";
import classes from './Modal.module.css'

function Modal (props) {

    function cancelHandler(){
        props.onCancel();

    };
    return(
<div className={classes.modal}>
<p>Ürünü silmek istediğinize emin misiniz?</p>
    <div className={classes.modalbox}>
   
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall....</p>
    </div>
    <div className={classes.buttons}>
<button onClick={cancelHandler} className={classes.yes}>Evet</button>
<button onClick={cancelHandler} className={classes.no}>Hayır</button>
</div>
</div>

);
}

export default Modal;