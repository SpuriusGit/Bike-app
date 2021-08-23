import React, { useState } from 'react';

import './list-item-style.css';

const ListItem = ({checkBike,type,color,name,id,item,price,remove}) =>{
    let [select,setSelect] = useState();
    let [selectValue,setValue] = useState();

    const change = (event) =>{
        setSelect(select = `list_item ${event.target.value}`);
        setValue(selectValue = event.target.value);
        checkBike(selectValue);
    }
    return (
        <div className={'list-item '+ select} id={selectValue}>
            <div className="list-item__info">
                <p><strong>{name}</strong> - {type}({color})</p>
                <p className="list-item__id">id:{id}</p>
                <p className="list-item__status">
                    STATUS: <select className="list-item__select" onChange={change} value={selectValue}>
                                <option value="Available">Available</option>
                                <option value="Unavailable">Unavailable</option>
                                <option value="Busy">Busy</option>
                            </select>
                </p>
            </div>
            <div className="list-item__right">
                <button className="remove" onClick={()=> remove(item)}>Х</button>
                <div className="list-item__price">{price}.00 UAH/hr.</div>
            </div>
        </div>
    );
};
export default ListItem;