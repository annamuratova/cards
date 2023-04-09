import React from "react";
import './card.css';
import './data/data';
import { fakeData } from "./data/data";

 function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-img" width="200px" height="200px"/>
            <div className="btns">
                <button className="btn" style={{ display: props.show }}>New</button>
                <button className="button">For Sale</button>
            </div>
            <i class="fas fa-heart" style={{ color: props.color }}></i>
            <div className="card-body">
                <span>{props.price}</span>
                <p>{props.adress}</p>
                <div className="ikon"><i class="fas fa-bed"></i> 1</div>
                <div className="ikon"><i class="fas fa-bath"></i> 2</div>
                <div className="ikon"><i class="fas fa-house-damage"></i> 60m<sup>2</sup></div>
            </div>
        </div>
    )

 }


function FakeData() {
    return (
        <div className="cards">
        {fakeData.map((card,key) => {
            return (
                <Card img={card.img} price={card.price} adress={card.adress} color={card.color} show={card.show}/>
            )
        })}
        </div>
    )
}

export default FakeData;