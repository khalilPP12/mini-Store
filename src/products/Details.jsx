import React, { useContext } from 'react'
import { Context } from '../datacenter/Datacenter'

export default function Details(props) {
    const {products}=useContext(Context)
    const id=props.match.params.id
    
    return (
        products.filter(data=>data.id==id)
        .map(info=>(
            <div className="card mt-2 col-md-4" style={{width:18+'erm'}}>
               <div className="card-body">
                    <h1 className="card-title">Produit: {info.name}</h1>
                    <h1 className="card-title">Prix: {info.price} $</h1>
                    <h1 className="card-title" style={{fontSize:25}}>Stock Disponible <span style={{fontSize:10}}> (Pour le moment)</span>: {info.stock_items}</h1>
               </div>
            </div>
        ))
      
    )
}
