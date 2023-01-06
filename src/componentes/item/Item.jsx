import React from "react";
import './item.css';


function Item(props){
    const {title, price, detail, imgurl} = props;
    return(
        <div>
            <div className="card">
                <img width="150" src={imgurl} alt="imagen"></img>
            </div>
           
            <h3>{title}</h3>
            <h4>${price}</h4>
            <p>{detail}</p>
        </div>
    )
}

export default Item;