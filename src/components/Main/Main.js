import React, { useState } from 'react';
import List from '../List/List';
import Form from '../Form/Form';

const Main = () => {
    let [arr,setArray] = useState([]);

    function createItem(newItem){
        setArray([...arr,newItem]);
    }
    function removeItem(item){
        setArray(arr.filter(p => p.key !== item.key));
    }
    return (
        <>
        <section className="main">
            <List items={arr} remove={removeItem}/>
            <Form create={createItem} statisticsData={arr}/>
        </section>
        </>
    );
};
export default Main;