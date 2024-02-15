import React from "react";
import { RxCross1 } from "react-icons/rx";
import "./style.css";

const ItemCard = ({ items, removedItem, setRemovedItem }) => {
    console.log("Hi Task", removedItem);
    return (
        <div>
            {items.map((item) => (
                <div className={`itemCardContainer ${removedItem.includes(item?.name) ? "hide" : ""}`} key={item.name}>
                    <input className="itemCheckbox" type="checkbox" id={item?.name} value={item?.name} />
                    <RxCross1 className="removeItem" onClick={() => setRemovedItem(item?.name)} />
                    <div className="itemCard">
                        <div className="itemImage">
                            <img src={item?.image} alt={item?.name} />
                        </div>
                        <div className="itemDetails">
                            <p className="boldText">{item?.name}</p>
                            <div>
                                <span className="normalText">{item?.description}</span>
                                <p className="mutedText itemSeller">Sold by: {item?.dealer}</p>
                            </div>
                            <div className="quantityDiv">
                                <div className="darkBackground margin-right">
                                    <label className="itemLabel boldText"> Size:
                                        <select className="itemSelectInput boldText" name={`selectedQty${item?.name}`} id={`selectedQty${item?.name}`}>
                                            {item?.sizes?.map((size) => (
                                                <option value={size}>{size}</option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                                <div className="darkBackground margin-right">
                                    <label className="itemLabel boldText"> Qty:
                                        <select className="itemSelectInput boldText" name={`selectedQty${item?.name}`} id={`selectedQty${item?.name}`}>
                                            <option value={1}>1</option>
                                        </select>
                                    </label>
                                </div>
                                {item?.availableQty < 6
                                    ? (
                                        <div className="warningBox">
                                            <p className="textDanger">{item?.availableQty} left</p>
                                        </div>
                                    )
                                    : null
                                }
                            </div>
                            <p>
                                <span className="boldText itemPrice"> ₹{item?.currentPrice}</span>
                                <span className="mutedText itemOldPrice"> ₹{item?.oldPrice}</span>
                                <span className="textDanger fineText itemDiscount">{item?.discount} OFF</span>
                            </p>
                            <p className="boldText itemNotes">{item?.note}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemCard;