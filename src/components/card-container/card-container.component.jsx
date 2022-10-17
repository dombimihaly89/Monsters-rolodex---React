import {Component} from "react";
import "./card-container.styles.css";

const CardContainer = ({monster: {name, email, id}}) => {
    return (
        <div className="card-container" key={id}>
            <img alt={`monster ${name}`}
                 src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default CardContainer
