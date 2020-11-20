import React, { useContext, useState } from 'react'

import { Context } from '../datacenter/Datacenter'


export default function Addnew(props) {
    const {addNew}=useContext(Context)
    const [product,setproduct]=useState({})
    const id=props.match.params.id
    function handlInput(e){
        setproduct({
            ...product,
            [e.target.name]:e.target.value
        })
    }
 function SendToParent(){
  addNew(product)
  props.history.push('/')
 }
    return (
        <div className='form-group container mt-5'>
        <input onChange={handlInput} name='name'  type="text" placeholder='Enter product name' className='form-control mb-3'/>
        <input onChange={handlInput} name='price'  type="text" placeholder='Enter product price' className='form-control mb-3'/>
        <input onChange={handlInput} name='stock_items'  type="text" placeholder='Enter product stock_items' className='form-control mb-3'/>
        <button onClick={SendToParent} className="btn btn-danger float-right">ADD NEW</button>

    </div>
    )
}
