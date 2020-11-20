import React, { useContext } from 'react'
import { Context } from '../datacenter/Datacenter'
import Product from './Product'
export default function Products() {
    const {products}=useContext(Context)
    return (<div>
        <div className="container">
<div className='row'>
        {products.map(product=>(

           <Product product={product}/>
           ))}
  
         </div>
            </div>
      
         </div>
    );
}
