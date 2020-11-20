import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../datacenter/Datacenter'
import { db } from '../apiproduct/Config'

export default function Update(props) {
    const id=props.match.params.id 
const {products,updateUser}=useContext(Context)
const [product,setproducts]=useState({})
function handlInput(e){
    setproducts({
        ...product,
        [e.target.name]:e.target.value
    })
}
function SendToParent(){
    updateUser(id,product)
    props.history.push('/')
   }
useEffect(() => {
    function fetchData(){
        products.filter(data=>data.id==id)
        .map(info=>{
            setproducts({
                name:info.name,
                price:info.price,
                stock_items:info.stock_items,
            })
        })
    }
    fetchData()
}, [])




    return (
      
        <div>
        < div className='form-control col-md-6 offset-3 mt-5'>
         <input onChange={handlInput} name='name'  defaultValue={product.name} type="text" className='form-control'/>
         <input onChange={handlInput} name='price'  defaultValue={product.price} type="text" className='form-control'/>
         <input onChange={handlInput} name='stock_items'  defaultValue={product.stock_items} type="text" className='form-control'/>
         <button onClick={SendToParent}  className="btn btn-warning ">Update User</button>
     </div>
     </div>
     
    )
}
