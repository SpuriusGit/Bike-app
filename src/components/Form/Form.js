import React, { useState } from 'react';

import Input from '../Input/Input';
import Textarea from '../Input/Textarea';
import Statistics from '../Statistics/Statistics';

import './form-style.css';

const Form = ({statisticsData,create}) => {

    let [item,setItem] = useState({name:'',type:'',color:'',wheelsize:'',price:"",id:'',description:''});

    function click(e){
        e.preventDefault();
        const newItem = { ...item,key:Date.now()};
        create(newItem);
        setItem({name:'',type:'',color:'',wheelsize:'',price:'',id:'',description:''});
    }
    function clearInput(){
        setItem({name:'',type:'',color:'',wheelsize:'',price:'',id:'',description:''});
    }
    return (
        <section className="main-right-field">
        <form className="form">
            <Input type="text" classname="name" name="name" maxlength={9} value={item.name} change={(event) => setItem({...item,name:event.target.value})} placeholder="Name" />
            <Input type="text" classname="type" name="type" maxlength={9} value={item.type} change={(event) => setItem({...item,type:event.target.value})} placeholder="Type"  />
            <Input type="text" classname="color" name="color" maxlength={9} value={item.color} change={(event) => setItem({...item,color:event.target.value})} placeholder="Color" />
            <Input type="text" classname="wheelsize" maxlength={9} value={item.wheelsize} change={(event) => setItem({...item,wheelsize:event.target.value})} placeholder="Wheel size"/>
            <Input type="number" classname="price" maxlength={5} value={item.price} change={(event) => setItem({...item,price:event.target.value})} placeholder="Price"/>
            <Input type="number" classname="id" max={10} value={item.id} change={(event) => setItem({...item,id:event.target.value})} placeholder="id"/>

            <Textarea classname="description" value={item.description} change={(event) => setItem({...item,description:event.target.value})} placeholder="Description"/>

            <Input type="submit" classname="save" Click={click} value={"SAVE"}/>
            <Input type="button" classname="clear" Click={clearInput} value="CLEAR"/>
        </form>
        <Statistics all={statisticsData.length} allPrice={statisticsData.length === 0 ? 0 :(statisticsData.map(el => +el.price).reduce((a, b) => a + b, 0)/statisticsData.length)}/>
        </section>
    );
};
export default Form;