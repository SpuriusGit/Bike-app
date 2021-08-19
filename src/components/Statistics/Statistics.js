import React from 'react';
import './statistics-style.css';

const Statistics = (props) =>{ 
    return (
        <section className="statistics">
            <h1>STATISTICS </h1>
            <p>Total bikes: {props.all}</p>
            <p>Average bike cost: UAH/hr. {props.allPrice} </p>
        </section>
    )
}
export default Statistics;