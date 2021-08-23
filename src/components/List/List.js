import React, { useState } from 'react';
import ListItem from '../ListItem/ListItem';

import './list-style.css';

const List = ({items,remove}) =>{
    let [bikeStatus,setBikeStatus] = useState();
    function checkBikeStatus(selectValue){
        setBikeStatus(bikeStatus=selectValue);
    }
    return (
        <div className="list">
            {items.map((item,key) =>
            <ListItem 
                key={key}
                index={items.length}
                name={item.name}
                type={item.type}
                color={item.color}
                price={item.price}
                id={item.id}   
                remove={remove} 
                item={item}
                bikeStatus={bikeStatus}
                checkBike={checkBikeStatus}
            />
            )}
        </div>
    );
};
export default List;