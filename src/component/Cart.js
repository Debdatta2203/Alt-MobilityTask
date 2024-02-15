import React, { useState }  from "react";
import ItemCard from "../elements/ItemCard";
import { cartItems } from "../constants/cartItems";
import "./style.css";

const Cart = () => {
    const [removedItem, setRemovedItem] = useState([]);

     return (
         <div className="container">
             <div className="cartDetails">
                <div className="boldText headingText">
                    <input className="selectAllCheckbox" type="checkbox" id="selectAll" checked value={cartItems} />
                    <span>
                        {cartItems?.length}/{cartItems?.length} ITEMS SELECTED
                    </span>
                </div>
                <div className="mutedText">
                    <button className="cartBtn mutedText btnBorderRight" onClick={() => setRemovedItem(cartItems)}>REMOVE</button>
                    <button className="cartBtn mutedText">MOVE TO WISHLIST</button>
                </div>
             </div>
             <ItemCard 
                items= {cartItems}
                removedItem={removedItem}
                setRemovedItem={(value) => setRemovedItem([...removedItem, value])}
             />
         </div>
     )
};

export default Cart;